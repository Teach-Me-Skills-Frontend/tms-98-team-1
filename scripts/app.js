import { WBView } from "./view/index.js";
import { WBData } from "./storage/index.js";
import { Server } from "./server/index.js";


export class WBController {
  constructor(){
    this.server = new Server();
    this.storage = new WBData();
    this.view = new WBView({
      cards : this.storage.getCards(),
      onCreateCards : this.cardCreate
    });
    
  }

  cardCreate = (cards) => {
    this.storage.setCards(cards)
    this.view.renderCards(cards)
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
