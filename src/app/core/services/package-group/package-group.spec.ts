import { TestBed } from '@angular/core/testing';
import { PackageGroupService } from './package-group';


describe('PackageGroup', () => {
  let service: PackageGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
