import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './NavBar/NavigationBarComponent'
import { FooterComponent } from './Footer/Footer.component'
import { BioSectionComponent } from './Bio/BioSectionComponent'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    BioSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    BioSectionComponent
  ]
})
export class AppModule { }
