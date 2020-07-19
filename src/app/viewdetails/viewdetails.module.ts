import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewdetailsRoutingModule } from './viewdetails-routing.module';
import { ViewdetailsComponent } from './viewdetails.component';


@NgModule({
  declarations: [ViewdetailsComponent],
  imports: [
    CommonModule,
    ViewdetailsRoutingModule
  ]
})
export class ViewdetailsModule { }
