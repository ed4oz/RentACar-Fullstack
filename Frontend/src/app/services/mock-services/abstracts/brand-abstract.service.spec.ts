import { TestBed } from '@angular/core/testing';

import { BrandAbstractService } from './brand-abstract.service';

describe('BrandAbstractService', () => {
  let service: BrandAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
