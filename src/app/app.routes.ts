import { Routes } from '@angular/router';
import { Nozzle } from './components/nozzle/nozzle';
import { Tunnel } from './components/tunnel/tunnel';

export const routes: Routes = [
    {
        path: 'nozzle',
        component: Nozzle
    },
    {
        path: 'tunnel',
        component: Tunnel
    },
];
