import { TestBed } from '@angular/core/testing';

import { TrasnlateService } from './trasnlate.service';

describe('TrasnlateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrasnlateService = TestBed.get(TrasnlateService);
    expect(service).toBeTruthy();
  });
});
