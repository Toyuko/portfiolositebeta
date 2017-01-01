/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BehanceService } from './behance.service';

describe('BehanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BehanceService]
    });
  });

  it('should ...', inject([BehanceService], (service: BehanceService) => {
    expect(service).toBeTruthy();
  }));
});
