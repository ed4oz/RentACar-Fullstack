import { TestBed } from '@angular/core/testing';

import { ModelAbstractService } from './model-abstract.service';

describe('ModelAbstractService', () => {
  let service: ModelAbstractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelAbstractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
