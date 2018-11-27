import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ModulesComponent } from './modules/modules.component';
import { MainComponent } from './principal/main/main.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        component: ModulesComponent,
        loadChildren: './modules/modules.module#ModulesModule'
    },
    { path: 'main/:id', component: MainComponent },
    { path: 'login ', component: LoginComponent}
];

export const App_Routes = RouterModule.forRoot( appRoutes, { useHash: true });