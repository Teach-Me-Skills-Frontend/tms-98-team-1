
export const overlay = () => {
    const modalBack = document.getElementById ('overlay');
    modalBack.addEventListener('click', () => {modalBack.classList.toggle('active');})

    return modalBack;
};
export function createModalItem () {
    const modalUserContainer = document.createElement ('div');
    modalUserContainer.classList.add('modal-user-container');
    modalUserContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    })

    const modalUserHeader = document.createElement ('div');
    modalUserHeader.classList.add('modal-user-header');

    const nameModalWindow = document.createElement('div');
    nameModalWindow.classList.add('name-modal-window');

    const closeModalUserWindow  = document.createElement('button');
    closeModalUserWindow.classList.add('close-modal-user-window');
    closeModalUserWindow.setAttribute('click', () => {modal.style.display = 'none';});

    const modalUserBody = document.createElement ('div');
    modalUserBody.classList.add('modal-user-body');

    const nameUser = document.createElement('div');
    nameUser.classList.add('user-name-container');

    const yourLogin = document.createElement('div')
    yourLogin.innerHTML = 'Введите ваш логин';
    yourLogin.classList.add('login')

    const loginInput = document.createElement('input');
    loginInput.classList.add('login-input');
    loginInput.setAttribute('type', 'text')

    const btnLogin = document.createElement('button');
    btnLogin.classList.add('login-btn');
    btnLogin.setAttribute('type', 'submit');


    modalUserContainer.append(modalUserHeader,modalUserBody);
    modalUserHeader.append(nameModalWindow,closeModalUserWindow);
    modalUserBody.append(nameUser);
    nameUser.append(yourLogin, loginInput, btnLogin);
    
    return modalUserContainer
}
export function modalWindowUser(){
    const modalBack = overlay();
    const modalBody = createModalItem();
    modalBack.append(modalBody);   
    return modalBack;
}

export function storeCart (){

    const modalBack = overlay();

    const modalCartContainer = document.createElement ('div');
    modalCartContainer.classList.add('modal-cart-container');

    const modalCartHeader = document.createElement ('div');
    modalCartHeader.classList.add('modal-cart-header');

    const cartName = document.createElement('div');
    cartName.classList.add('cart');
    cartName.innerText = 'Корзина';

    const closeModalCartWindow  = document.createElement('button');
    closeModalCartWindow.classList.add('close-modal-cart-window');
    closeModalCartWindow.setAttribute('click', () => {modal.style.display = 'none';});

    const modalCartBody = document.createElement ('div');
    modalCartBody.classList.add('modal-body');

    //openspace for addCard

    modalBack.append(modalCartContainer);
    modalCartContainer.append(modalCartHeader, modalCartBody);
    modalCartHeader.append(cartName, closeModalCartWindow);
    modalCartBody.append();

}

export function createModalWindow ({cardName, img, price, cardRate, id}) {

    const modalBack = overlay();
  
    const modalContainer = document.createElement ('div');
    modalContainer.classList.add('modal-container');
  
    const modalHeader = document.createElement ('div');
    modalHeader.classList.add('modal-header');
  
    const cardOfItem = document.createElement('div');
    cardOfItem.classList.add('card-of-item');
  
    const closeModalWindow  = document.createElement('button');
    closeModalWindow.classList.add('close-modal-window');
    closeModalWindow.setAttribute('click', () => {modal.style.display = 'none';});
  
    const modalBody = document.createElement ('div');
    modalBody.classList.add('modal-body');
  
    const imgCart = document.createElement('img');
    imgCart.classList.add('modal-img');
    imgCart.src(`${img}`);
  
    const modalfooter = document.createElement('div');
    modalContainer.classList.add('modal-footer');
  
    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.innerText = `${cardName}`;
    
    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-name');
    itemPrice.innerText = `${price}`;
  
    const itemRate = document.createElement('div');
    itemRate.classList.add('item-rate');
    itemRate.innerText = `${cardRate}`;
  
    const btnAddCart = document.createElement('div');
    btnAddCart.classList.add('add-in-cart');
    btnAddCart.setAttribute('click', addInCard());
  
    modalBack.append(modalContainer);
    modalContainer.append(modalHeader, modalBody, modalfooter);
    modalHeader.append(cardOfItem, closeModalWindow);
    modalBody.append(imgCart);
    modalfooter.append(itemName, itemPrice, itemRate, btnAddCart);
    
}


