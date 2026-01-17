import { Routes } from '@angular/router';
import { Nozzle } from './components/nozzle/nozzle';
import { Tunnel } from './components/tunnel/tunnel';
import { ParentComponent } from './components/parent-component/parent-component';

export const routes: Routes = [
    {
        path: 'nozzle',
        component: Nozzle
    },
    {
        path: 'tunnel',
        component: Tunnel
    },
    {
        path: 'parent',
        component: ParentComponent
    },
];
