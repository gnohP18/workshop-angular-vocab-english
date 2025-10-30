import { TestBed } from '@angular/core/testing';

import { PackageGroup } from './package-group';

describe('PackageGroup', () => {
  let service: PackageGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageGroup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
