import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(fb, route, router, ngZone, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
            this.form = this.fb.group({
                name: ['', Validators.required],
                age: ['', Validators.required],
                family: ['', Validators.required],
                race: ['', Validators.required],
                food: ['', Validators.required],
                password: ['', Validators.required],
                confirm_password: ['', Validators.required],
            });
            /*if (await this.authService.checkAuthenticated()) {
              await this.router.navigate([this.returnUrl]);
            }*/
        });
    }
    register() {
        this.loginInvalid = false;
        this.formSubmitAttempt = false;
        if (this.form.valid) {
            console.log('COMPONENT REGISTER');
            console.log(this.form.value);
            this.authService.register(this.form.value).subscribe((res) => {
                this.router.navigateByUrl('home');
            });
        }
        else {
            this.formSubmitAttempt = true;
        }
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map