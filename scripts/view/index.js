import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { ModalWindowsView } from "./modal_windows/index.js";
export class WBView {
  constructor({cards}){
    this.slider = new SliderView();
    this.cardsItems = new CardsView({cards});
    this.modalWindows = new ModalWindowsView({cards});
    this.burger = document.getElementById('burger');
    this.burger.addEventListener('click', () => {
      document.getElementById('aside').classList.toggle('active_aside')
    })
  }

  renderCards = (cards) => {
    this.cardsItems.createCards(cards);
  }
}
