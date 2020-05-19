var AuthModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
//import { JwtInterceptorProvider, ErrorInterceptorProvider } from "./helpers";
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule_1,
            providers: [
                //AlertService,
                //ValidationService,
                AuthService,
            ]
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        declarations: [],
        providers: [
            AuthGuard,
            //AlertService,
            //ValidationService,
            AuthService,
        ],
        exports: []
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map