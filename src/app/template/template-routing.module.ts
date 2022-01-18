import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrecosComponent } from './precos/precos.component';

const routes: Routes = [
  {
    path: 'precos',
    component: PrecosComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TemplateRoutingModule { }
