import { __decorate } from "tslib";
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContactTableDataSource } from './contact-table-datasource';
let ContactTableComponent = class ContactTableComponent {
    constructor() {
        this.delete_contact = new EventEmitter();
        this.table_initialized = new EventEmitter();
        this.current_contacts = [];
        //@ViewChild(MatTable, {static: false}) table :  MatTable<ContactTableItem>;; // initialize
        this.data = [];
        this.dataSource = new ContactTableDataSource(this.data);
        this.displayedColumns = ['contact_name', 'contact_age', 'contact_family', 'contact_race', 'contact_food', 'action'];
        this.initialized = false;
        this.isLoading = true;
    }
    ngOnInit() {
        this.dataSource = new ContactTableDataSource(this.data);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.initialized = true;
        this.table_initialized.emit();
    }
    ngOnChanges(changes) {
        if (this.initialized) {
            this.data = this.contacts2contactTableItems(this.current_contacts);
            this.dataSource = new ContactTableDataSource(this.data);
            this.dataSource.data = this.contacts2contactTableItems(this.current_contacts);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.table.dataSource = this.dataSource;
            this.isLoading = false;
        }
    }
    delete_contact_handler(contact_id) {
        this.delete_contact.emit(contact_id);
    }
    contact2contactTableItem(contact) {
        let item = {};
        item['pangolin_id'] = contact.pangolin_id;
        item['contact_id'] = contact.contact_id;
        item['contact_name'] = contact.contact_name;
        item['contact_age'] = contact.contact_age;
        item['contact_family'] = contact.contact_family;
        item['contact_race'] = contact.contact_race;
        item['contact_food'] = contact.contact_food;
        item['action'] = 'SUPPRIMER';
        return item;
    }
    contacts2contactTableItems(contacts) {
        let contactTableItems = [];
        contacts.map((contact) => {
            contactTableItems.push(this.contact2contactTableItem(contact));
        });
        return contactTableItems;
    }
};
__decorate([
    Output()
], ContactTableComponent.prototype, "delete_contact", void 0);
__decorate([
    Output()
], ContactTableComponent.prototype, "table_initialized", void 0);
__decorate([
    Input()
], ContactTableComponent.prototype, "current_contacts", void 0);
__decorate([
    ViewChild(MatPaginator)
], ContactTableComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatSort)
], ContactTableComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatTable)
], ContactTableComponent.prototype, "table", void 0);
ContactTableComponent = __decorate([
    Component({
        selector: 'app-contact-table',
        templateUrl: './contact-table.component.html',
        styleUrls: ['./contact-table.component.css']
    })
], ContactTableComponent);
export { ContactTableComponent };
//# sourceMappingURL=contact-table.component.js.map