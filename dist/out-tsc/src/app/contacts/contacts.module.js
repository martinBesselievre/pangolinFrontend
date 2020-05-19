var ContactModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ContactService } from "./contact.service";
let ContactModule = ContactModule_1 = class ContactModule {
    static forRoot() {
        return {
            ngModule: ContactModule_1,
            providers: [
                ContactService
            ]
        };
    }
};
ContactModule = ContactModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule],
        declarations: [],
        providers: [
            ContactService,
        ],
        exports: []
    })
], ContactModule);
export { ContactModule };
//# sourceMappingURL=contacts.module.js.map