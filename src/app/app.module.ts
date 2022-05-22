import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
