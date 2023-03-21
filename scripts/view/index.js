import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { ModalWindowsView } from "./modal_windows/index.js";
import { Search } from "./search/index.js";
import { serachForm } from "./search/constants.js";

export class WBView {
  constructor({onToCartPurchase, onSearch}){
    this.slider = new SliderView();
    this.cardsItems = new CardsView(onToCartPurchase);
    this.search = new Search(onSearch);
    this.modalWindows = new ModalWindowsView();
    this.burger = document.getElementById('burger');
    this.overlayRender = this.overlay();
    this.cardsWrapper = document.getElementById('cards_wrapper')
    this.showMore = document.getElementById('show_more');
    this.scrollArrow = document.getElementById('arrow_top');
    this.searchForm = serachForm;

    this.burger.addEventListener('click', () => {
      document.getElementById('aside').classList.toggle('aside__active');
      document.body.classList.add('__lock')
      this.overlayRender.style.visibility = 'visible'
    })
    this.overlayRender.addEventListener('click', () => {
      this.overlayRender.style.visibility = 'hidden'
      document.getElementById('aside').classList.toggle('aside__active')
      document.body.classList.remove('__lock')
    })

    this.showMore.addEventListener('click', () => {
      this.renderMoreCards()
      if(document.getElementById('show_more_text').textContent === 'Показать ещё'){
        this.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Скрыть</p>
        <i class="fa-solid fa-arrow-up"></i>`     
      }
      else {
        this.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Показать ещё</p> 
        <i class="fa-solid fa-arrow-down"></i>`
      }
    })

    this.scrollArrow.addEventListener('click', this.scrollToTop)

    this.scroll = window.addEventListener('scroll', () => {
      this.scrollArrow.classList.toggle('active', scrollY > 500)
    })
    this.searchForm.addEventListener('submit', (event) => {
      event.preventDefault()
      this.cardsWrapper.innerHTML = '';
      this.renderSerch()
    })
    }
  

  renderCards = (cards) => {
    this.cardsItems.createCards(cards);
  }

  overlay = () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay')
    document.body.append(overlay);
    return overlay;
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

    renderSerch = () => {
      this.search.createSearchRow()
    }
}
