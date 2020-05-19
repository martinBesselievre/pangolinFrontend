import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.title = 'Pangolins';
        this.authenticated = false;
        this.auth_event = new EventEmitter();
    }
    ngOnInit() {
        /*this.authenticated = this.authService.isAuthenticated();
        if (!this.authenticated) {
          this.auth_event.emit(this.authenticated)
          this.router.navigateByUrl('/login')
        }*/
    }
    ngOnChanges() {
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
        this.auth_event.emit(this.authenticated);
        this.router.navigateByUrl('login');
    }
};
__decorate([
    Output()
], AppComponent.prototype, "auth_event", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map