import { TestBed, inject } from '@angular/core/testing';

import { GetCommercesService } from './get-commerces.service';

describe('GetCommercesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCommercesService]
    });
  });

  it('should be created', inject([GetCommercesService], (service: GetCommercesService) => {
    expect(service).toBeTruthy();
  }));
});
