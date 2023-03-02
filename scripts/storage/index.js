const LocalStorageKey = {
  cards: 'cards'
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
  }
  getShopCards = () => {
    console.log(this.shopCards)
    return this.shopCards;
  }
}
