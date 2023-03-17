import { cardClassName as clName } from './constants.js';

const {itemKey, imgKey, wrapperTextKey, priceKey, deliveryKey, nameKey, aKey, svgKey, rateKey, btnKey} = clName;

export function createItem ({img, cardName, price, cardRate, id}) {

    const item = createEl('div',{class: itemKey, id: `${id}`});
    
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

    const rate = createEl('div',{class: rateKey}, `${cardRate}`);
    a.append(rate);

    const button = createEl('button',{class: btnKey, data_row_btn: `${id}`}, 'В корзину');
    button.setAttribute('data-row-btn', 'бла-бла-бла')
    wrapperText.append(button);

    return item;
}

export function createEmptyItem(){
    const emptyItem = createEl('div',{}, 'Что-то пошло не так, товаров нет');
    return emptyItem
}

// Функции создания элементов
//_________________________________________

function createEl(tag, elProps, text = ''){
    const el = document.createElement(tag)
    el.textContent = text
    for (const key in elProps) {
        el.setAttribute(key, elProps[key]);
    }
    return el;
}
