import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BannerComponent = class BannerComponent {
    constructor(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.title = 'Pangolins';
        this.authenticated = false;
        this.username = '';
        this.authService.isAuthenticated().subscribe(data => {
            console.log('status');
            console.log(status);
            this.authenticated = data.status;
            this.authenticated = data.username;
        });
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    login() {
        this.router.navigateByUrl('login');
    }
    logout() {
        this.authService.logout();
        this.authenticated = false;
        //this.auth_event.emit(this.authenticated)
        this.router.navigateByUrl('login');
    }
};
BannerComponent = __decorate([
    Component({
        selector: 'app-banner',
        templateUrl: './banner.component.html',
        styleUrls: ['./banner.component.css']
    })
], BannerComponent);
export { BannerComponent };
//# sourceMappingURL=banner.component.js.map