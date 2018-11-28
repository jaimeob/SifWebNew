import { RouterModule, Routes } from '@angular/router';

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

const modulesRoutes: Routes = [
    { path: 'usuario/nuevo', component: CreateUsuarioComponent },
    { path: 'usuario/detalle', component: DetailUsuarioComponent },
    { path: 'usuario/editar', component: EditUsuarioComponent },
    { path: 'modulo/nuevo', component: CreateModuloComponent },
    { path: 'modulo/detalle', component: DetailModuloComponent },
    { path: 'modulo/editar', component: EditModuloComponent },
    { path: 'barrido/nuevo', component: CreateBarridoComponent },
    { path: 'barrido/detalle', component: DetailBarridoComponent },
    { path: 'barrido/editar', component: EditBarridoComponent },
    { path: 'principal', component: PrincipalComponent }   
];

export const Modules_Routes = RouterModule.forChild( modulesRoutes );