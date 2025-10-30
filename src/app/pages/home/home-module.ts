import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PackageGroupItem } from './components/package-group-item/package-group-item';
import { Home } from './home';
import { HomeRoutingModule } from './home-routing-module';


@NgModule({
  declarations: [
    Home,
    PackageGroupItem
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
