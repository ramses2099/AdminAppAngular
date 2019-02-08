import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [DashboradComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    LayoutModule
  ]
})
export class DashboradModule { }
