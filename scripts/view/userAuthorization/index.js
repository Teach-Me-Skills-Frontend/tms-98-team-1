import {createItem} from './utils.js';
import {container} from './constants.js';
const userName = 'Денис'
export class UserAuthorization {
    constructor(){
        this.container = container;
        this.userName = userName;
        this.el = createItem

        this.renderWelkome(this.userName, this.container)

    }
    renderWelkome = (userName, container) => {
        const item = this.el(userName);
        container.append(item);
    }
}
