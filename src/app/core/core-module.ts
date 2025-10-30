import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { IPackageGroupService } from './services/abstracts/package-group.abstract';
import { PackageGroupService } from './services/package-group/package-group';

const DATA_SERVICES: Provider[] = [
  { provide: IPackageGroupService, useClass: PackageGroupService }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  providers: [
    ...DATA_SERVICES
  ]
})
export class CoreModule { }
