import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Barridos_Routes } from './barridos.routes';

import { CreateBarridoComponent } from './barrido/create-barrido.component';
import { DetailBarridoComponent } from './barrido/detail-barrido.component';
import { EditBarridoComponent } from './barrido/edit-barrido.component';

@NgModule({
  declarations: [
    CreateBarridoComponent, 
    DetailBarridoComponent, 
    EditBarridoComponent],
  imports: [
    CommonModule,
    Barridos_Routes
  ]
})
export class BarridosModule { }
