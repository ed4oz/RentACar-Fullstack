import { TestBed } from '@angular/core/testing';

import { ModelMockService } from './model-mock.service';

describe('ModelMockService', () => {
  let service: ModelMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
