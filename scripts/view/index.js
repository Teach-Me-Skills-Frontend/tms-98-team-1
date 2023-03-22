import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { UserAuthorization } from "./userAuthorization/index.js"; //todo user
import { ModalWindowsView } from "./modal_windows/index.js";
import { Search } from "./search/index.js";
import { serachForm } from "./search/constants.js";

export class WBView {
  constructor({onToCartPurchase, onSearch, userName}){
    this.elements = {
      burger : document.getElementById('burger'),
      searchForm : serachForm,
      cardsWrapper : document.getElementById('cards_wrapper'),
      showMore : document.getElementById('show_more'),
      scrollArrow : document.getElementById('arrow_top'),
      overlayRender : this.overlay(),
      searchFooter : document.getElementById('footer_search'),
    }
    this.instans = {
      slider : new SliderView(),
      userWelcome : new UserAuthorization({userName}),
      cardsItems : new CardsView(onToCartPurchase),
      search : new Search(onSearch),
      modalWindows : new ModalWindowsView()
    }

    this.elements.burger.addEventListener('click',() => {
      if (this.elements.burger.innerHTML === '<i class="fa-solid fa-x"></i>'){
        this.removeOverlay()
      } else {
        this.renderAside();
      }
    })
    this.elements.overlayRender.addEventListener('click', this.removeOverlay)
    this.elements.showMore.addEventListener('click', () => {
      this.renderMoreCards()
      if(document.getElementById('show_more_text').textContent === 'Показать ещё'){
        this.elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Скрыть</p>
        <i class="fa-solid fa-arrow-up"></i>`     
      }
      else {
        this.elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Показать ещё</p> 
        <i class="fa-solid fa-arrow-down"></i>`
      }
    })

    this.elements.searchForm.addEventListener('submit', (event) => {
      this.removeOverlay();
      this.renderSearch(event)
    })

    this.elements.scrollArrow.addEventListener('click', this.scrollToTop)

    this.scroll = window.addEventListener('scroll', () => {
      this.elements.scrollArrow.classList.toggle('active', scrollY > 500)
    })

    this.elements.searchFooter.addEventListener('click', () => {
      this.scrollToTop();
      this.renderAside();
      this.elements.searchForm.elements['search_input'].focus();

    })    
    }
  

  renderCards = (cards) => {
    this.instans.cardsItems.createCards(cards);
  }

  renderAside = () => {
      document.getElementById('aside').classList.add('aside__active');
      document.body.classList.add('__lock')
      this.elements.overlayRender.style.visibility = 'visible'
      this.elements.burger.innerHTML = '<i class="fa-solid fa-x"></i>'
  }

  overlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay')
    document.body.append(overlay);
    return overlay;
  }

  removeOverlay = () => {
      this.elements.overlayRender.style.visibility = 'hidden'
      document.getElementById('aside').classList.remove('aside__active')
      document.body.classList.remove('__lock')
      this.elements.burger.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }

  renderMoreCards = () => {
    document.getElementById('cards_wrapper').classList.toggle('s-cards__item-wrapper__active')
  }
  
  scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    renderSearch = (event) => {
      event.preventDefault()
      this.elements.cardsWrapper.innerHTML = '';
      this.instans.search.createSearchRow()
    }
}
