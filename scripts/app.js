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
    console.log(this.storage.getCards())
  }

  initiliaze = (url) => {
    this.server.getServerCards(url).then(cards => {
      this.cardCreate(cards)
    })
    
  }

}
