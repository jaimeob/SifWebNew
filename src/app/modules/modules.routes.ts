import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { AdminComponent } from './admin/admin.component';
import { BarridosComponent } from './barridos/barridos.component';

const modulesRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: 'core',
        component: CoreComponent,
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: 'barridos',
        component: BarridosComponent,
        loadChildren: './barridos/barridos.module#BarridosModule'
    },    
];

export const Modules_Routes = RouterModule.forChild( modulesRoutes );