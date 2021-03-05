import { TestBed } from '@angular/core/testing';

import { AlmacenprovedorService } from './almacenprovedor.service';

describe('AlmacenprovedorService', () => {
  let service: AlmacenprovedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenprovedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
