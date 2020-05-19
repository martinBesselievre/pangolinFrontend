import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let AvailableContactsComponent = class AvailableContactsComponent {
    constructor() {
        this.available_contacts = [];
        this.show_radio_buttons = false;
        this.add_to_current_contacts = new EventEmitter();
        this.toggle_radio_buttons = false;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.showList = (this.available_contacts.length > 0) ? true : false;
        this.toggle_radio_buttons = this.show_radio_buttons;
    }
    add_contact(contact_id) {
        this.add_to_current_contacts.emit(contact_id);
        this.toggle_radio_buttons = false;
    }
};
__decorate([
    Input()
], AvailableContactsComponent.prototype, "available_contacts", void 0);
__decorate([
    Input()
], AvailableContactsComponent.prototype, "show_radio_buttons", void 0);
__decorate([
    Output()
], AvailableContactsComponent.prototype, "add_to_current_contacts", void 0);
AvailableContactsComponent = __decorate([
    Component({
        selector: 'app-available-contacts',
        templateUrl: './available-contacts.component.html',
        styleUrls: ['./available-contacts.component.css']
    })
], AvailableContactsComponent);
export { AvailableContactsComponent };
//# sourceMappingURL=available-contacts.component.js.map