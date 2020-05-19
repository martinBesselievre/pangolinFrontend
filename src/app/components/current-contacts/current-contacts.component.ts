import { Component, Input, OnInit,  OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Contact} from '../../models/contact';

@Component({
  selector: 'app-current-contacts',
  templateUrl: './current-contacts.component.html',
  styleUrls: ['./current-contacts.component.css']
})
export class CurrentContactsComponent implements OnInit {

  @Output() show_radio_buttons = new EventEmitter<any>(); 
  @Output() delete_contact = new EventEmitter<any>(); 
  @Output() table_initialized = new EventEmitter<any>(); 
  @Input() current_contacts: Contact[] = []
  showTable: boolean

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showTable =  (this.current_contacts.length == 0) ? false :  true;
  }

  add_contact_handler(): void{
  	this.show_radio_buttons.emit();  
  }

  delete_contact_handler(contact_id: number): void {
  	this.delete_contact.emit(contact_id)
  }

  table_initialized_handler(): void {
   this.table_initialized.emit()
  }

}
