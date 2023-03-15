import {container} from './constants.js';
import { cardClassName as clName } from './constants.js';
const {itemKey, imgKey, wrapperTextKey, priceKey, deliveryKey, nameKey, aKey, svgKey, rateKey, btnKey} = clName;

export function createItem ({img, cardName, price, cardRate, id}) {
    const wrapper = container;

    const item = createEl('div',{class: itemKey, id: `${id}`});
    wrapper.append(item);
    
    const imgEl = createEl('img',{class: imgKey, src: `${img}`});
    item.append(imgEl);

    const wrapperText = createEl('div',{class: wrapperTextKey});
    item.append(wrapperText);

    const priceEl = createEl('div',{class: priceKey}, `${price} byn`);
    wrapperText.append(priceEl);

    const delivery = createEl('div',{class: deliveryKey}, 'Доставка 10-11 марта');
    wrapperText.append(delivery);

    const name = createEl('div',{class: nameKey}, `${cardName}`);
    wrapperText.append(name);

    const a = createEl('a',{class: aKey});
    wrapperText.append(a);

    const svg = createEl('i',{class: svgKey});
    a.append(svg);

    // const svg = createEl('svg',{class: svgKey});
    // a.append(svg);

    // const use = createEl('use'); //todo Свг из спрайта не работает
    // use.setAttribute('xlink:href', '#star')
    // svg.append(use);

    const rate = createEl('div',{class: rateKey}, `${cardRate}`);
    a.append(rate);

    const button = createEl('button',{class: btnKey, data_row_btn: `${id}`}, 'В корзину');
    button.setAttribute('data-row-btn', 'бла-бла-бла')
    wrapperText.append(button);

    return wrapper;
}

export function createEmptyItem(){
    const wrapper = container;
    const item = createEl('div',{}, 'Что-то пошло не так, товаров нет');
    wrapper.append(item);
    return wrapper
}

// Функции создания элементов
//_________________________________________

function createEl(tag, elProps, text = ''){
    const variable = document.createElement(tag)
    variable.innerHTML = text
    for (const key in elProps) {
        variable.setAttribute(key, elProps[key]);
    }
    return variable;
}