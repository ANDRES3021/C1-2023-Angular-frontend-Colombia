import { TestBed } from '@angular/core/testing';

import { NewTransferServiceService } from './new-transfer.service.service';

describe('NewTransferServiceService', () => {
  let service: NewTransferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
