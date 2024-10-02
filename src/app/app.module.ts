import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Standalone component
import { MenuComponent } from './menu/menu.component'; // Regular component
import { CarouselComponent } from './carousel/carousel.component'; // Regular component
import { ContactUsComponent } from './contact-us/contact-us.component'; // Regular component
import { FooterComponent } from './footer/footer.component'; // Standalone component

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarouselComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderComponent, // Importing standalone HeaderComponent
    FooterComponent   // Importing standalone FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
