import { WBView } from "./view/index.js";
import { WBData } from "./storage/index.js";
import { Server } from "./server/index.js";


export class WBController {
  constructor(){
    this.server = new Server();
    this.storage = new WBData();
    this.view = new WBView({
      cards : this.storage.getCards(),
      onCreateCards : this.cardCreate,
      onToCartPurchase : this.cardToCart,
      search: this.search  //todo search
    });
    
  }

  search = (searchValue, cards) => {  //todo search
    console.log(this.storage.setCards(cards))
      //todo search чёт не могу получить твой массив cards.
      //todo Но по логике, тут нужно что-то вроде, перебрать твои кардс и если имя карточки совпало с велью закинуть в массив найденных карточек и
      // todo this.view.renderCards(массив найденных карточек)
  }

  cardCreate = (cards) => {
    this.storage.setCards(cards)
    this.view.renderCards(cards)
  }

  cardToCart = (cardId) => {
    this.storage.pushShopCards(cardId);
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
      });
      this.cardCreate(cards)
    })
    
  }

}
