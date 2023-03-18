import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { ModalWindowsView } from "./modal_windows/index.js";
export class WBView {
  constructor({cards}){
    this.slider = new SliderView();
    this.cardsItems = new CardsView({cards});
    this.modalWindows = new ModalWindowsView({cards});
    this.burger = document.getElementById('burger');
    this.overlayRender = this.overlay()
    this.showMore = document.getElementById('show_more')


    this.burger.addEventListener('click', () => {
      document.getElementById('aside').classList.toggle('active_aside');
      document.body.classList.add('__lock')
      this.overlayRender.style.visibility = 'visible'
    })
    this.overlayRender.addEventListener('click', () => {
      this.overlayRender.style.visibility = 'hidden'
      document.getElementById('aside').classList.toggle('active_aside')
      document.body.classList.remove('__lock')
    })

    this.showMore.addEventListener('click', () => {
      this.renderMoreCards()
      if(document.getElementById('show_more_text').textContent === 'Показать ещё'){
        this.showMore.innerHTML = 
         ` <p href="#!" class="s-cards__btn-show_more" id="show_more_text">Скрыть</p>
         <i class="fa-solid fa-arrow-up"></i>`     
      }
      else {
         this.showMore.innerHTML = 
        `<p href="#!" class="s-cards__btn-show_more" id="show_more_text">Показать ещё</p> 
         <i class="fa-solid fa-arrow-down"></i>`
      }
    })
    }
  

  renderCards = (cards) => {
    this.cardsItems.createCards(cards);
  }

  overlay = () => {
    const overlay = document.getElementById('overlay')
    document.body.append(overlay);
    return overlay;
  }

  renderMoreCards = () => {
    document.getElementById('cards_wrapper').classList.toggle('s-cards__item-wrapper_active')
  }
}
