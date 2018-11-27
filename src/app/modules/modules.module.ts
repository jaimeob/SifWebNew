import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { Modules_Routes } from './modules.routes';

// Componentes Modulos
import { AdminComponent } from './admin/admin.component';
import { BarridosComponent } from './barridos/barridos.component';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AdminComponent,
    BarridosComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    Modules_Routes
  ]
})
export class ModulesModule { }
