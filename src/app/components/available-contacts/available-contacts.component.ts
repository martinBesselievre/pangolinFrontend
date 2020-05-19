import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { Contact } from '../../models/contact'

@Component({
  selector: 'app-available-contacts',
  templateUrl: './available-contacts.component.html',
  styleUrls: ['./available-contacts.component.css']
})

export class AvailableContactsComponent implements OnInit {
  
  @Input() available_contacts: Contact[] = []
  @Input() show_radio_buttons: boolean = false
  @Output() add_to_current_contacts = new EventEmitter<any>(); 
  showList: boolean
  contact_id: number;
  toggle_radio_buttons: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showList = (this.available_contacts.length > 0) ? true : false;
    this.toggle_radio_buttons = this.show_radio_buttons;
    
  }

  add_contact(contact_id:number) {
  	this.add_to_current_contacts.emit(contact_id)
    this.toggle_radio_buttons = false;
  }

}
