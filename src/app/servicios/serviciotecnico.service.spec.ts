import { TestBed } from '@angular/core/testing';

import { ServiciotecnicoService } from './serviciotecnico.service';

describe('ServiciotecnicoService', () => {
  let service: ServiciotecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciotecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
