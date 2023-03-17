import {createItem, createEmptyItem} from './utils.js';
import {container} from './constants.js';

export class CardsView {
    constructor(){
    this.container = container

    }
    createCards = (cards) => {
        this.container.innerHTML = '';
        if (cards.length > 0) {
            for (const card of cards) {
                this.container.append(createItem(card));
            }
        }else{
            this.container.append(createEmptyItem());
        }
    }
}
