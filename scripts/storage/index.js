const LocalStorageKey = {
  cards: 'cards',
  cardsInCart: 'cart'
};

export class WBData {
  constructor(){
    this.cards = [];
    this.shopCards = [];
  }

  setCards = (cards) => {
      this.cards = cards;
      localStorage.setItem(LocalStorageKey.cards, JSON.stringify(this.cards))
      return this.cards
    }
  getCards = () => {
    return this.cards.slice()
  }
  pushShopCards = (id) => {
    this.cards.forEach((el) => {
      if(el.id === id){
        this.shopCards.push(el)
      };
    });
    localStorage.setItem(LocalStorageKey.cardsInCart, JSON.stringify(this.shopCards))
  }
  getShopCards = () => {
    return this.shopCards.slice();
  }

  getSearch = (serchValue) => {
    if(serchValue){
      return this.cards.slice().filter((el) => el.cardName === serchValue);
    }
    else {
      return this.cards.slice()
    }
  }
}
