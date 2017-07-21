import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainContentMapComponent} from "./main-content-map/main-content-map.component";
import {FooterLineComponent} from "./footer-line/footer-line.component";
import {CatagoryRowComponent} from "./catagory-row/catagory-row.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentMapComponent,
    FooterLineComponent,
    CatagoryRowComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
