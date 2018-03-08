import { TestBed, inject } from '@angular/core/testing';

import { WorkouttransactionsService } from './workouttransactions.service';

describe('WorkouttransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkouttransactionsService]
    });
  });

  it('should be created', inject([WorkouttransactionsService], (service: WorkouttransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
