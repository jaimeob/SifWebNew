import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { BarridosComponent } from './barridos/barridos.component';

const modulesRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'barridos',
        component: BarridosComponent,
        loadChildren: './barridos/barridos.module#BarridosModule'
    },
];

export const Modules_Routes = RouterModule.forChild( modulesRoutes );