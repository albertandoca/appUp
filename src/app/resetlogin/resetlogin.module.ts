import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetloginPageRoutingModule } from './resetlogin-routing.module';

import { ResetloginPage } from './resetlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetloginPageRoutingModule
  ],
  declarations: [ResetloginPage]
})
export class ResetloginPageModule {}
