import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BasicPackageGroup } from '../../../../core/models/packageGroup.model';

@Component({
  selector: 'app-package-group-item',
  standalone: true,
  templateUrl: './package-group-item.html',
  styleUrl: './package-group-item.css',
})
export class PackageGroupItem {
  @Input() packageGroup!: BasicPackageGroup;

  constructor(private router: Router) {}

  goToDetail(): void {
    this.router.navigate(['/group', this.packageGroup.id]);
  }
}
