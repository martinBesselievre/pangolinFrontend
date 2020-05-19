import { Component, OnInit, Input } from '@angular/core';
import { Marker } from '../../models/marker'
import { Contact } from '../../models/contact'
import { ContactService } from '../../contacts/contact.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() width
  @Input() center
  @Input() zoom
 
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    maxZoom: 15,
    minZoom: 9,
  }
  markers: any = []
  available_contacts_markers: any = []
  current_contacts_markers: any = []
  authenticated_markers:  any = []
  current_contacts: Contact[]
  available_contacts: Contact[]


  constructor(private contactService: ContactService,
  		 		private router: Router) { }
  ngOnInit(): void {
  	this.center = { lat: Number(localStorage.getItem('LAT')), lng: Number(localStorage.getItem('LNG'))}


	const pangolin_id = localStorage.getItem("USERID")
	this.current_contacts = []
	this.available_contacts = []
	this.contactService.list_contacts(pangolin_id, 'available').
		subscribe((contacts: any[]) => {
	    	this.available_contacts = contacts
	    	contacts.map((item) => {
	    		this.available_contacts_addMarker({lat: item.contact_lat, lng: item.contact_lng}, item.contact_name)
	    	})
	    	
	    }, (error) => {                         
          throw error;
        });
	this.contactService.list_contacts(pangolin_id, 'current').
	    subscribe((contacts: any[]) => {
	    	this.current_contacts = contacts
	    	contacts.map((item) => {
	    		this.current_contacts_addMarker({lat: item.contact_lat, lng: item.contact_lng}, item.contact_name)
	    	})
	    }, (error) => {                          
          throw error;
        });	
    this.authenticated_addMarker(this.center, localStorage.getItem('USERNAME'))

  	}


  authenticated_addMarker(latLng, label) {
      let marker = new google.maps.Marker()
      marker.setPosition(latLng)
      marker.setIcon('{url:    "http://maps.google.com/mapfiles/ms/micons/red-dot.png" }')
      marker.setLabel(label)
      this.available_contacts_markers.push(marker);
  }
  available_contacts_addMarker(latLng, label) {
      let marker = new google.maps.Marker()
      marker.setPosition(latLng)
      marker.setIcon('{url:    "http://maps.google.com/mapfiles/ms/micons/orange-dot.png" }')
      marker.setLabel(label)
      this.available_contacts_markers.push(marker);
  }

  current_contacts_addMarker(latLng, label) {
      let marker = new google.maps.Marker()
      marker.setPosition(latLng)
      marker.setIcon('{url:    "http://maps.google.com/mapfiles/ms/micons/green-dot.png" }')
      marker.setLabel(label)
      this.current_contacts_markers.push(marker);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

}
