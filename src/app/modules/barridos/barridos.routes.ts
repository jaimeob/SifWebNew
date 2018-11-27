import { RouterModule, Routes } from '@angular/router';

import { CreateBarridoComponent } from './barrido/create-barrido.component';
import { DetailBarridoComponent } from './barrido/detail-barrido.component';
import { EditBarridoComponent } from './barrido/edit-barrido.component';

const barridosRoutes: Routes = [
    { path: 'barrido/nuevo', component: CreateBarridoComponent },
    { path: 'barrido/detalle', component: DetailBarridoComponent },
    { path: 'barrido/editar', component: EditBarridoComponent }
];

export const Barridos_Routes = RouterModule.forChild( barridosRoutes );