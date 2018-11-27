import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App_Routes } from './app.routes';

// Servicios
import { ServicesModule } from './services/services.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalModule } from './principal/principal.module';
import { ModulesComponent } from './modules/modules.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    App_Routes,
    PrincipalModule,
    ServicesModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
