import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DrivenComponent } from './driven/driven.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ValidarDrivenComponent } from './validar-driven/validar-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    CabeceraComponent,
    ValidarDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
