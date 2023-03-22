import {createItem} from './utils.js';
export class UserAuthorization {
    constructor(){
        this.el = createItem

    }
    renderWelkome = (userName, container) => {
        const item = this.el(userName);
        container.append(item);
    }
}
