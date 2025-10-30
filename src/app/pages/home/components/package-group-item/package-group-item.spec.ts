import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGroupItem } from './package-group-item';

describe('PackageGroupItem', () => {
  let component: PackageGroupItem;
  let fixture: ComponentFixture<PackageGroupItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackageGroupItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageGroupItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
