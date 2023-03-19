import {createItem, createEmptyItem} from './utils.js';
import {container} from './constants.js';

export class CardsView {
    constructor(onToCartPurchase){
    this.container = container
    this.item = createItem;
    this.toCart = onToCartPurchase;
    }
    createCards = (cards) => {
        this.container.innerHTML = '';
        if (cards.length > 0) {
            for (const card of cards) {
                const item = this.item(card);
                this.container.append(item);
                item.addEventListener('click', ({target}) => {
                    if(target.id === 'toCartBtn'){
                        this.toCart(target.dataset.rowBtn);
                    }
                })
            }
        }else{
            this.container.append(createEmptyItem());
        }
    }
}
