import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contacts/contacts.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { CurrentContactsComponent } from './components/current-contacts/current-contacts.component';
import { AvailableContactsComponent } from './components/available-contacts/available-contacts.component';
import { BannerComponent } from './components/banner/banner.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegisterComponent,
            ProfileComponent,
            HomeComponent,
            LoginComponent,
            ContactComponent,
            ContactTableComponent,
            CurrentContactsComponent,
            AvailableContactsComponent,
            BannerComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            MatToolbarModule,
            MatMenuModule,
            MatButtonModule,
            MatIconModule,
            MatCardModule,
            MatInputModcule,
            MatTableModule,
            MatListModule,
            MatRadioModule,
            MatProgressSpinnerModule,
            FlexLayoutModule,
            MatPaginatorModule,
            MatSortModule,
            AuthModule.forRoot(),
            ContactModule.forRoot(),
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map