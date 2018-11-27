import { RouterModule, Routes } from '@angular/router';

import { CreateUsuarioComponent } from './usuario/create-usuario.component';
import { DetailUsuarioComponent } from './usuario/detail-usuario.component';
import { EditUsuarioComponent } from './usuario/edit-usuario.component';
import { CreateModuloComponent } from './modulo/create-modulo.component';
import { DetailModuloComponent } from './modulo/detail-modulo.component';
import { EditModuloComponent } from './modulo/edit-modulo.component';

const adminRoutes: Routes = [
    { path: 'usuario/nuevo', component: CreateUsuarioComponent },
    { path: 'usuario/detalle', component: DetailUsuarioComponent },
    { path: 'usuario/editar', component: EditUsuarioComponent },
    { path: 'modulo/nuevo', component: CreateModuloComponent },
    { path: 'modulo/detalle', component: DetailModuloComponent },
    { path: 'modulo/editar', component: EditModuloComponent },
];

export const Admin_Routes = RouterModule.forChild( adminRoutes );