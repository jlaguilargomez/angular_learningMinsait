import { TestBed } from '@angular/core/testing';

import { PetApiService } from './pet-api.service';

describe('PetApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetApiService = TestBed.get(PetApiService);
    expect(service).toBeTruthy();
  });
});
