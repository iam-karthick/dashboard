import { ModuleWithProviders } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { MainComponent }  from './component/main/main.component';
import { SwitchComponent }  from './component/switch/switch.component';

const rout:Routes=[
    {
        path:'',
        component:MainComponent,
    },
    {
        path:'switch',
        component:SwitchComponent,
    },

]
export const route : ModuleWithProviders =RouterModule.forRoot(rout)