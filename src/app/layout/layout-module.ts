import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';



@NgModule({
  declarations: [Header, Footer],
  imports: [
    CommonModule
  ],
  exports: [
    Header, Footer
  ]
})
export class LayoutModule { }
