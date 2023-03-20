import {seacrhInput, searchBtn, serachForm} from './constants.js';

export class Search {
    constructor(search){
    this.seacrhInput = seacrhInput;
    this.searchBtn = searchBtn;
    this.serachForm = serachForm;
    this.search = search

    this.serachForm.addEventListener('submit', ( event ) =>{
        event.preventDefault();
        const {value} = this.seacrhInput
        const formattedValue = value.trim();
        if (formattedValue) {
            this.search(formattedValue)
            console.log(formattedValue)
            this.serachForm.reset()
        }
    })
    }
}
