import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';

const coreRoutes: Routes = [
    /*{ path: '/principal/:id', component: PrincipalComponent }*/
];

export const Core_Routes = RouterModule.forChild( coreRoutes );