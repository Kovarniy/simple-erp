import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {SidebarNavigationComponent} from "./components/sidebar-navigation/sidebar-navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
