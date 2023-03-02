import { cards } from "../constants.js";
const LocalStorageKey = {
  cards: 'cards'
};

export class WBData {
  constructor(){
    this.cards = cards;
  localStorage.setItem(LocalStorageKey.cards, JSON.stringify(this.cards))
this.getCards = () => { 
      return this.cards.slice();
    }
  }
}