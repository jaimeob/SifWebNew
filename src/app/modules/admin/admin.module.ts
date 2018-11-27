import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin_Routes } from './admin.routes';

import { CreateUsuarioComponent } from './usuario/create-usuario.component';
import { DetailUsuarioComponent } from './usuario/detail-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario.component';
import { CreateModuloComponent } from './modulo/create-modulo.component';
import { DetailModuloComponent } from './modulo/detail-modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo.component';

@NgModule({
  declarations: [
    CreateUsuarioComponent,
    DetailUsuarioComponent,
    EditUsuarioComponent,
    CreateModuloComponent,
    DetailModuloComponent,
    EditModuloComponent
  ],
  imports: [
    CommonModule,
    Admin_Routes
  ]
})
export class AdminModule { }
