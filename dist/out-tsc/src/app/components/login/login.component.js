import { __awaiter, __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.auth_event = new EventEmitter();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
            this.form = this.fb.group({
                name: ['', Validators.required],
                password: ['', Validators.required]
            });
        });
    }
    login() {
        this.loginInvalid = false;
        this.formSubmitAttempt = false;
        if (this.form.valid) {
            this.authService.login(this.form.value).subscribe((res) => {
                this.auth_event.emit(true);
                this.router.navigateByUrl('home');
            });
        }
        else {
            this.formSubmitAttempt = true;
        }
    }
};
__decorate([
    Output()
], LoginComponent.prototype, "auth_event", void 0);
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map