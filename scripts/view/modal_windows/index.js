import { ModalWindowUser } from "./modalUser.js"
export class ModalWindowsView {
  constructor(){
    this.user = new ModalWindowUser()
  }

  openUser = () => {
    this.user.openUserModal()
  }

}
