import {createItem, createEmptyItem} from './utils.js';
import {container} from './constants.js';

const cards = [{img: 'https://loremflickr.com/640/480', cardName: 'Small Steel Sausages', price: '674.00', cardRate: '079', id: '1'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
{img: 'https://loremflickr.com/640/480',cardName: 'Modern Cotton Shirt', price: '705.00', cardRate: '7545', id: '2'},
] //todo удалить тестовый cards
const cardsa = [] //todo удалить тестовый cards
export class CardsView {
  // constructor({cards}){ //todo раскоментить cards
  constructor(){ //todo удалить тестовый cards
    this.container = container
    this.cards = cards
    // this.item = createItem()
    this.renderCards(this.cards)
    this.consolelog()//todo удалить
    }
    consolelog = () => {//todo удалить
        console.log()
    }
    renderCards = (cards) => {
        this.container.innerHTML = '';
        if (cards.length > 0) {
            for (const card of cards) {
                createItem(card);
            }
        }else{
            createEmptyItem()
        }
    }
}
