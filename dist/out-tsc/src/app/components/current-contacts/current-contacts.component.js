import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CurrentContactsComponent = class CurrentContactsComponent {
    constructor() {
        this.show_radio_buttons = new EventEmitter();
        this.delete_contact = new EventEmitter();
        this.table_initialized = new EventEmitter();
        this.current_contacts = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.showTable = (this.current_contacts.length == 0) ? false : true;
    }
    add_contact_handler() {
        this.show_radio_buttons.emit();
    }
    delete_contact_handler(contact_id) {
        this.delete_contact.emit(contact_id);
    }
    table_initialized_handler() {
        this.table_initialized.emit();
    }
};
__decorate([
    Output()
], CurrentContactsComponent.prototype, "show_radio_buttons", void 0);
__decorate([
    Output()
], CurrentContactsComponent.prototype, "delete_contact", void 0);
__decorate([
    Output()
], CurrentContactsComponent.prototype, "table_initialized", void 0);
__decorate([
    Input()
], CurrentContactsComponent.prototype, "current_contacts", void 0);
CurrentContactsComponent = __decorate([
    Component({
        selector: 'app-current-contacts',
        templateUrl: './current-contacts.component.html',
        styleUrls: ['./current-contacts.component.css']
    })
], CurrentContactsComponent);
export { CurrentContactsComponent };
//# sourceMappingURL=current-contacts.component.js.map