import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ModulesComponent } from './modules/modules.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: ModulesComponent,
        loadChildren: './modules/modules.module#ModulesModule'
    },
    { path: '** ', component: LoginComponent}
];

export const App_Routes = RouterModule.forRoot( appRoutes, { useHash: true });