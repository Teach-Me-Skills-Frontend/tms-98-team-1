import { modalWindowUser, overlay, createModalItem } from './utilies.js'
import { user } from "./constans.js";
export class ModalWindowUser {
    constructor(){
        this.modalBody = createModalItem()
        this.modalWindowUser = modalWindowUser();
        this.header = document.getElementById('header')
        this.header.addEventListener('click', ({target}) => {
            if(target.id === 'user'){
                this.modalWindowUser.classList.add('active')
            }
        })
    }
}
