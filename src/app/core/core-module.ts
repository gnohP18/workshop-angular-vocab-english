import { CommonModule } from '@angular/common';
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
  ],
  providers: [
    ...DATA_SERVICES
  ]
})
export class CoreModule { }
