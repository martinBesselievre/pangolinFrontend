import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { ContactService } from "./contact.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    ContactService,
  ],
  exports: []
})

export class ContactModule {
	static forRoot(): ModuleWithProviders {
    return {
      ngModule: ContactModule,
      providers: [
        ContactService
      ]
    };
  }
}

