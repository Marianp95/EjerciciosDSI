import { Contact } from "../models/contact.model";
export class ContactService{
  private contacts: Contact []= [{firebase: "",nombre:"Andres",organizacion:"UC3M",movil:"666666666",correo:"andres@example.com"}];
  constructor(){
  }
  addContact(value: Contact){
    this.contacts.push(value);
  }
  getContacts(){
    return this.contacts;
  }
}
