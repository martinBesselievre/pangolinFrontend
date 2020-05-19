import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnDestroy {
  title = 'Pangolins'
  auth_state_subscription: Subscription
  authenticated: boolean = false
  username = ''

  constructor(private authService: AuthService,
  			 private route: ActivatedRoute,
    		 private router: Router) {

  	this.auth_state_subscription = this.authService.isAuthenticated().subscribe(data => {
  		if (data.username) {
  			this.authenticated = true
  			this.username = data.username
  		}
  		else {
  			this.authenticated = false
  			this.username = ''
  		}
  	})
  }
 
  ngOnDestroy(): void {
  	this.auth_state_subscription.unsubscribe()
  }


  login() {
      this.router.navigateByUrl('login')
  }

  logout() {
  	this.authService.logout()
    this.router.navigateByUrl('login')
  }

}
