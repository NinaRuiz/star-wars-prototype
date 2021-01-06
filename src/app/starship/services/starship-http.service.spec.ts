import { TestBed } from '@angular/core/testing';

import { StarshipHttpService } from './starship-http.service';

describe('StarshipHttpService', () => {
  let service: StarshipHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
