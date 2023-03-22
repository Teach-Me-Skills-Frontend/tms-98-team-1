import { WBView } from "./view/index.js";
import { WBData } from "./storage/index.js";
import { Server } from "./server/index.js";


export class WBController {
  constructor(){
    this.server = new Server();
    this.storage = new WBData();
    this.view = new WBView({
      cards : this.storage.getCards(),
      onBackToCards : this.backToDefaultCards,
      onToCartPurchase : this.cardToCart,
      onSearch : this.search,
    });
    
  }

  cardCreate = (cards) => {
    this.storage.setCards(cards)
    this.view.renderCards(cards)
  }

  backToDefaultCards = () => {
    this.view.renderCards(this.storage.getCards())
  }

  cardToCart = (cardId) => {
    this.storage.pushShopCards(cardId);
  }

  search = (searchValue) => {
    this.view.renderCards(this.storage.getSearch(searchValue))
  }

  initiliaze = (url) => {
    this.server.getServerCards(url).then(cards => {
      cards.forEach(element => {
        if (element.cardRate >= 5){
          element.cardRate = Math.floor(Math.random() * 5) + 1;
        }
        if(element.deliveryDate > 31){
          element.deliveryDate = Math.floor(Math.random() * 10) + 1
        }
        element.id = window.crypto.randomUUID();
      });
      this.cardCreate(cards)
    })
    
  }

}
