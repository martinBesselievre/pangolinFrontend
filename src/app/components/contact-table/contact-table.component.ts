import { Component, Input, OnInit,  OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { Contact} from '../../models/contact';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ContactTableDataSource } from './contact-table-datasource';
import { ContactTableItem } from '../../models/contact-table-item';


@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  @Output() delete_contact = new EventEmitter<any>(); 
  @Output() table_initialized = new EventEmitter<any>(); 
  @Input() current_contacts: Contact[] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ContactTableItem>;
 
  data: ContactTableItem[] = [] 
  dataSource = new ContactTableDataSource(this.data);
  displayedColumns = ['contact_name', 'contact_age', 'contact_family', 'contact_race', 'contact_food', 'action'];
  initialized :boolean = false;
  isLoading = true;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new ContactTableDataSource(this.data)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.initialized = true;
    this.table_initialized.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.initialized) {
       this.data=this.contacts2contactTableItems(this.current_contacts)
       this.dataSource = new ContactTableDataSource(this.data)
       this.dataSource.data=this.contacts2contactTableItems(this.current_contacts)
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
       this.table.dataSource = this.dataSource
       this.isLoading = false;
    }
  }

  delete_contact_handler(contact_id: number): void {
    this.delete_contact.emit(contact_id)
  }

  contact2contactTableItem(contact) {
    let item = {}
    item['pangolin_id'] = contact.pangolin_id
    item['contact_id'] = contact.contact_id
    item['contact_name'] = contact.contact_name
    item['contact_age'] = contact.contact_age
    item['contact_family'] = contact.contact_family
    item['contact_race'] = contact.contact_race
    item['contact_food'] = contact.contact_food
    item['action'] = 'SUPPRIMER'
    return item;
  }

  contacts2contactTableItems(contacts) {
    let contactTableItems = []
    contacts.map((contact) => {
      contactTableItems.push(this.contact2contactTableItem(contact))
    })
    return contactTableItems
  }

}
