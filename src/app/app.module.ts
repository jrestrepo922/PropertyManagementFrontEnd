import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"; 
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { PropertiesComponent } from './components/properties/properties.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CreatePropertyComponent } from './components/create-property/create-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateAccountComponent,
    PropertiesComponent,
    NavigationComponent,
    CreatePropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
