import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { About } from './about';
import { AboutRoutingModule } from './about-routing-module';


@NgModule({
  declarations: [
    About
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
