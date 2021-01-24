import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetloginPage } from './resetlogin.page';

const routes: Routes = [
  {
    path: '',
    component: ResetloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetloginPageRoutingModule {}
