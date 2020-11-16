import { TestBed } from '@angular/core/testing';

import { MinFechaSalidaService } from './min-fecha-salida.service';

describe('MinFechaSalidaService', () => {
  let service: MinFechaSalidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinFechaSalidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
