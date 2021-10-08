import { TestBed } from '@angular/core/testing';

import { CowinServiceService } from './cowin-service.service';

describe('CowinServiceService', () => {
  let service: CowinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CowinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
