import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BasicPackageGroup } from '../../core/models/packageGroup.model';
import { IPackageGroupService } from '../../core/services/abstracts/package-group.abstract';
import { PackageGroupItem } from './components/package-group-item/package-group-item';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [
    CommonModule, 
    PackageGroupItem
  ]
})
export class Home {
  private packageGroupService = inject(IPackageGroupService);

  packageGroups: BasicPackageGroup[] = [];
  isLoading: boolean = false;
  error: string | null = null

  ngOnInit() {
    this.loadNewestPackageGroups();
  }

  loadNewestPackageGroups(): void {
    this.isLoading = true;
    this.packageGroupService.getNewest().subscribe({
      next: (res) => {
        this.packageGroups = res;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Không thể tải danh sách gói.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
