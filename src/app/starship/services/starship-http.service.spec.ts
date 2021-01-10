import { TestBed } from '@angular/core/testing';

import { StarshipHttpService } from './starship-http.service';

describe('StarshipHttpService', () => {
  let service: StarshipHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipHttpService);
  });

  // region good faith

  // endregion good faith

  // region bad faith

  // region bad faith

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
