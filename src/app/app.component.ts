import { Component, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pangolins';
  authenticated = false;
  @Output() auth_event = new EventEmitter<any>(); 

	constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    /*this.authenticated = this.authService.isAuthenticated();
    if (!this.authenticated) {
      this.auth_event.emit(this.authenticated)
      this.router.navigateByUrl('/login')
    }*/
  }

  ngOnChanges(): void {
    /*this.authenticated = this.authService.isAuthenticated();
    if (!this.authenticated) {
      this.auth_event.emit(this.authenticated)
      this.router.navigateByUrl('/login')
    }*/
  }

  /*auth_event_handler($event) {
    console.log('app-root auth_event_handler')
  }*/

  login() {
      this.router.navigateByUrl('login');
  }

  logout() {
  	this.authService.logout();
    this.authenticated = false;
    this.auth_event.emit(this.authenticated)
    this.router.navigateByUrl('login');
  }
}
