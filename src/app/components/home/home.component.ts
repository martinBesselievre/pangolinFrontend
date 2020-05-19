import { Component, OnInit } from '@angular/core'
import { Contact } from '../../models/contact'
import { ContactService } from '../../contacts/contact.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  	current_contacts: Contact[]
  	available_contacts: Contact[]
  	show_radio_buttons: boolean = false
  	loading: boolean = false;

  	constructor(private contactService: ContactService,
  		 		private router: Router) { }

	contact2dataItem(contact) {
	    let item = {}
	    item['pangolin_id'] = contact.pangolin_id
	    item['contact_id'] = contact.contact_id
	    item['contact_name'] = contact.contact_name
	    item['contact_age'] = contact.contact_age
	    item['contact_family'] = contact.contact_family
	    item['contact_race'] = contact.contact_race
	    item['contact_food'] = contact.contact_food
	    item['action'] = 'DELETE'
	    return item;
  	}

  	ngOnInit(): void {
	  	const pangolin_id = localStorage.getItem("USERID")
	  	this.current_contacts = []
	  	this.available_contacts = []
	  	this.contactService.list_contacts(pangolin_id, 'available').
	    subscribe((contacts: Contact[]) => {
	    	this.available_contacts = contacts
	    }, (error) => {                         
          throw error;
        });
	    this.contactService.list_contacts(pangolin_id, 'current').
	    subscribe((contacts: Contact[]) => {
	    	this.current_contacts = contacts
	    }, (error) => {                          
          throw error;
        });
  	}

	show_radio_buttons_handler(): void {
	  	this.show_radio_buttons = true
	}

	table_initialized_handler(): void {
   		const pangolin_id = localStorage.getItem("USERID")
   		
	    this.contactService.list_contacts(pangolin_id, 'available').
	    subscribe((contacts: Contact[]) => {
	    	this.available_contacts = contacts
	    })
	    this.contactService.list_contacts(pangolin_id, 'current').
	    subscribe((contacts: Contact[]) => {
	    	this.current_contacts = contacts
	    })
  	}

  	delete_contact_handler(contact_id: number) {
	  	const pangolin_id = localStorage.getItem("USERID")
	 	this.contactService.delete_contact(pangolin_id, contact_id).
	 	subscribe((result: any) =>  {
			this.contactService.list_contacts(pangolin_id, 'current').
		    subscribe((contacts: Contact[]) => {
		    	this.current_contacts = contacts
		    })
		    this.contactService.list_contacts(pangolin_id, 'available').
		    subscribe((contacts: Contact[]) => {
		    	this.available_contacts = contacts
		    })
	 	})
  	}

 	add_contact_handler(contact_id): void {
	 	const pangolin_id = localStorage.getItem("USERID")
	 	this.contactService.add_contact(pangolin_id, contact_id).
	 		subscribe((result: any) =>  {
	 			this.contactService.list_contacts(pangolin_id, 'current').
			    subscribe((contacts: Contact[]) => {
			    	this.current_contacts = contacts
			    })
			    this.contactService.list_contacts(pangolin_id, 'available_contacts').
			    subscribe((contacts: Contact[]) => {
			    	this.available_contacts = contacts
			    	this.show_radio_buttons = false;
			    })
	 		})
 	}

}
