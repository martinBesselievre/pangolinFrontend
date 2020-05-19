import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.show_radio_buttons = false;
    }
    contact2dataItem(contact) {
        let item = {};
        item['pangolin_id'] = contact.pangolin_id;
        item['contact_id'] = contact.contact_id;
        item['contact_name'] = contact.contact_name;
        item['contact_age'] = contact.contact_age;
        item['contact_family'] = contact.contact_family;
        item['contact_race'] = contact.contact_race;
        item['contact_food'] = contact.contact_food;
        item['action'] = 'DELETE';
        return item;
    }
    ngOnInit() {
        const pangolin_id = localStorage.getItem("USERID");
        this.current_contacts = [];
        this.available_contacts = [];
        this.contactService.list_contacts(pangolin_id, 'available').
            subscribe((contacts) => {
            this.available_contacts = contacts;
        });
        this.contactService.list_contacts(pangolin_id, 'current').
            subscribe((contacts) => {
            this.current_contacts = contacts;
        });
    }
    show_radio_buttons_handler() {
        this.show_radio_buttons = true;
    }
    table_initialized_handler() {
        const pangolin_id = localStorage.getItem("USERID");
        this.contactService.list_contacts(pangolin_id, 'available').
            subscribe((contacts) => {
            this.available_contacts = contacts;
        });
        this.contactService.list_contacts(pangolin_id, 'current').
            subscribe((contacts) => {
            this.current_contacts = contacts;
        });
    }
    delete_contact_handler(contact_id) {
        const pangolin_id = localStorage.getItem("USERID");
        this.contactService.delete_contact(pangolin_id, contact_id).
            subscribe((result) => {
            this.contactService.list_contacts(pangolin_id, 'current').
                subscribe((contacts) => {
                this.current_contacts = contacts;
            });
            this.contactService.list_contacts(pangolin_id, 'available').
                subscribe((contacts) => {
                this.available_contacts = contacts;
            });
        });
    }
    add_contact_handler(contact_id) {
        const pangolin_id = localStorage.getItem("USERID");
        this.contactService.add_contact(pangolin_id, contact_id).
            subscribe((result) => {
            this.contactService.list_contacts(pangolin_id, 'current').
                subscribe((contacts) => {
                this.current_contacts = contacts;
            });
            this.contactService.list_contacts(pangolin_id, 'available_contacts').
                subscribe((contacts) => {
                this.available_contacts = contacts;
                this.show_radio_buttons = false;
            });
        });
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map