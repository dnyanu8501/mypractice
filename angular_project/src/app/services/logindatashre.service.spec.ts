import { TestBed } from '@angular/core/testing';

import { LogindatashreService } from './logindatashre.service';

describe('LogindatashreService', () => {
  let service: LogindatashreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogindatashreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
