import { SliderView } from "./slider/index.js";
import { CardsView } from "./cards/index.js";
import { ModalWindowsView } from "./modal_windows/index.js";
export class WBView {
  constructor({cards}){
    this.slider = new SliderView();
    this.cardsItems = new CardsView();
    this.modalWindows = new ModalWindowsView({cards});
  }
}
