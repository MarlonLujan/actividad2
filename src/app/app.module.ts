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
import { ListaComponent } from './lista/lista.component';
import { FormularioAgregarUsuariosComponent } from './formulario-agregar-usuarios/formulario-agregar-usuarios.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {RouterModule} from "@angular/router";
import{ observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
 import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    FormularioComponent,
    ListaComponent,
    FormularioAgregarUsuariosComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,

    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
