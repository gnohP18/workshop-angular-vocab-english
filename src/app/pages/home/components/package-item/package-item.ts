import { Component, Input } from '@angular/core';
import { BasicPackage } from '../../../../core/models/package.model';

@Component({
  selector: 'app-package-item',
  imports: [],
  templateUrl: './package-item.html',
  styleUrl: './package-item.css',
})
export class PackageItem {
  @Input() package!: BasicPackage;
}
