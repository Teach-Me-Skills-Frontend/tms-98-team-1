import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { UserAuthorization } from "./userAuthorization/index.js"; //todo user
import { ModalWindowsView } from "./modal_windows/index.js";
import { Search } from "./search/index.js";
import { serachForm } from "./search/constants.js";

import { elements } from "../constants.js";

export class WBView {
  constructor({onToCartPurchase, onSearch, userName, onBackToCards, onCart}){
    this.instans = {
      slider : new SliderView(),
      userWelcome : new UserAuthorization({userName}),
      cardsItems : new CardsView({onToCartPurchase}),
      search : new Search(onSearch),
      modalWindows : new ModalWindowsView()
    }
    this.functions = {
      backToCards : onBackToCards,
      searchForm : serachForm,
      // overlayRender : this.instans.modalWindows.overlay(),
      overlayRender : this.overlay(),
      // cart : onCart
    }

    elements.burger.addEventListener('click',() => {
      if (elements.burger.innerHTML === '<i class="fa-solid fa-x"></i>'){
        this.removeOverlay()
      } else {
        this.renderAside();
      }
    })
    this.functions.overlayRender.addEventListener('click', this.removeOverlay)
    elements.showMore.addEventListener('click', () => {
      this.renderMoreCards()
      if(document.getElementById('show_more_text').textContent === 'Показать ещё'){
        elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Скрыть</p>
        <i class="fa-solid fa-arrow-up"></i>`     
      }
      else {
        elements.showMore.innerHTML = 
        `<p class="s-cards__btn-show_more" id="show_more_text">Показать ещё</p> 
        <i class="fa-solid fa-arrow-down"></i>`
      }
    })

    this.functions.searchForm.addEventListener('submit', (event) => {
      this.removeOverlay();
      this.renderSearch(event)
    })

    elements.scrollArrow.addEventListener('click', this.scrollToTop)

    this.scroll = window.addEventListener('scroll', () => {
      elements.scrollArrow.classList.toggle('active', scrollY > 500)
    })

    elements.searchFooter.addEventListener('click', () => {
      this.scrollToTop();
      this.renderAside();
      this.functions.searchForm.elements['search_input'].focus();

    })   
    
    elements.cardsWrapper.addEventListener('click', ({target}) => {
      if (target.id === 'back'){
        this.functions.backToCards()
      }
    })

    // elements.cartBtn.addEventListener('click', () => {
    //   this.functions.cart()
    //   document.getElementById('modal_cart').classList.add('modal_cart-active')
    //   this.functions.overlayRender.style.visibility = 'visible';
    //   this.functions.overlayRender.addEventListener('click', () => {
    //     document.getElementById('modal_cart').classList.remove('modal_cart-active')
    //   })
    // })
    }
  

  renderCards = (cards) => {
    this.instans.cardsItems.createCards(cards);
  }

  renderAside = () => {
      document.getElementById('aside').classList.add('aside__active');
      document.body.classList.add('__lock')
      this.functions.overlayRender.style.visibility = 'visible'
      elements.burger.innerHTML = '<i class="fa-solid fa-x"></i>'
  }


  removeOverlay = () => {
      this.functions.overlayRender.style.visibility = 'hidden';
      // document.getElementById('modal_cart').visibility = 'hidden';
      document.getElementById('aside').classList.remove('aside__active');
      document.body.classList.remove('__lock');
      elements.burger.innerHTML = '<i class="fa-solid fa-bars"></i>';

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
      elements.cardsWrapper.innerHTML = '';
      this.instans.search.createSearchRow()
    }

    overlay = () => {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay')
      document.body.append(overlay);
      return overlay;
    }

    // renderCart = (cards) => {
    //   this.instans.modalWindows.addCartContent(cards)
    // }
}

