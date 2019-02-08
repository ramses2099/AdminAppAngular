import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingrnavbarComponent } from './settingrnavbar/settingrnavbar.component';

@NgModule({
  declarations: [TopnavbarComponent, AsidenavbarComponent, FooternavbarComponent, SettingrnavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingrnavbarComponent]
})
export class LayoutModule { }
