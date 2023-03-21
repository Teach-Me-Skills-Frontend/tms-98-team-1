import {createEl} from '../cards/utils.js';

export function createItem (userName) {
    const el = createEl('span', {class: 'userAuthorization'}, `Добро пожаловать ${userName}`)
    return el
}
