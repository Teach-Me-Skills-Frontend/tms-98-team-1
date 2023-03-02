import { WBView } from "./view/index.js";
import { WBData } from "./storage/index.js";
import {} from "./constants.js"


export class WBController {
  constructor(){
    this.storage = new WBData();
    this.view = new WBView({
      cards : this.storage.getCards(),
      onCreateCards : this.cardCreate
    });
    console.log(this.storage.getCards())
  }

  cardCreate = (serchValue) => {
    console.log(serchValue)
  }
}