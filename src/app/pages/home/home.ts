import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { BasicPackage } from '../../core/models/package.model';
import { BasicPackageGroup } from '../../core/models/packageGroup.model';
import { IPackageGroupService } from '../../core/services/abstracts/package-group.abstract';
import { PackageGroupItem } from './components/package-group-item/package-group-item';
import { PackageItem } from './components/package-item/package-item';
import { RegisterForm } from "./components/register-form/register-form";
import { TryDragDropVocab } from "./components/try-drag-drop-vocab/try-drag-drop-vocab";
import { WelcomeBackground } from './components/welcome-background/welcome-background';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [
    CommonModule,
    PackageGroupItem,
    PackageItem,
    WelcomeBackground,
    RegisterForm,
    TryDragDropVocab
]
})
export class Home {
  private packageGroupService = inject(IPackageGroupService);

  packageGroups: BasicPackageGroup[] = [];
  packages: BasicPackage[] = [];
  isLoadingPg: boolean = false;
  isLoadingP: boolean = false;
  error: string | null = null;
  centerItemId: string | null = null;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.loadNewestPackageGroups();
    this.loadNewestPackages();
  }

 loadNewestPackageGroups = async () =>  {
    this.isLoadingPg = true;
    this.packageGroupService.getNewestPackageGroup().subscribe({
      next: (res) => {
        this.packageGroups = res;
        this.isLoadingPg = false;
      },
      error: (err) => {
        this.error = 'Không thể tải danh sách gói.';
        console.error(err);
        this.isLoadingPg = false;
      }
    });
  }

  loadNewestPackages = async () => {
    this.isLoadingP = true;
    this.packageGroupService.getNewestPackage().subscribe({
      next: (res) => {
        this.packages = res;
        this.isLoadingP = false;
      },
      error: (err) => {
        this.error = 'Không thể tải danh sách gói.';
        console.error(err);
        this.isLoadingP = false;
      }
    });
  }

  onScroll() {
    const container = this.scrollContainer.nativeElement;

    let closestId: string | null = null;
    let closestDistance = Number.MAX_VALUE;

    for (const group of this.packageGroups) {
      const el = container.querySelector(`[ng-reflect-package-group*="${group.id}"]`) as HTMLElement;
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const elCenter = rect.left + rect.width / 2;
      const distance = Math.abs(elCenter - window.innerWidth / 2);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = group.id;
      }
    }

    this.centerItemId = closestId;
  }

  getScale(id: string) {
    return this.centerItemId === id ? 'scale(1.1)' : 'scale(1.0)';
  }
}
