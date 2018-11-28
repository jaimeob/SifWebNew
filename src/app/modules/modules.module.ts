import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { Modules_Routes } from './modules.routes';

// Componentes Modulos
import { CreateUsuarioComponent } from './admin/usuario/create-usuario.component';
import { DetailUsuarioComponent } from './admin/usuario/detail-usuario.component';
import { EditUsuarioComponent } from './admin/usuario/edit-usuario.component';
import { CreateModuloComponent } from './admin/modulo/create-modulo.component';
import { DetailModuloComponent } from './admin/modulo/detail-modulo.component';
import { EditModuloComponent } from './admin/modulo/edit-modulo.component';
import { CreateBarridoComponent } from './barridos/barrido/create-barrido.component';
import { DetailBarridoComponent } from './barridos/barrido/detail-barrido.component';
import { EditBarridoComponent } from './barridos/barrido/edit-barrido.component';
import { PrincipalComponent } from './core/principal/principal.component';

@NgModule({
  declarations: [
    CreateUsuarioComponent,
    DetailUsuarioComponent,
    EditUsuarioComponent,
    CreateModuloComponent,
    DetailModuloComponent,
    EditModuloComponent,
    CreateBarridoComponent,
    DetailBarridoComponent,
    EditBarridoComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    Modules_Routes
  ]
})
export class ModulesModule { }
