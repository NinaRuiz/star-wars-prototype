import { TestBed } from '@angular/core/testing';

import { StarshipHttpService } from './starship-http.service';
import {Observable} from 'rxjs';
import {StarshipListModel} from '../models/starship-list-model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';

describe('StarshipHttpService', () => {
  let service: StarshipHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [
        HttpClientTestingModule
      ],
      providers: [
        StarshipHttpService
      ]});
    service = TestBed.inject(StarshipHttpService);
  });

  // region good faith


  it ('getListTest validate return type', () => {
    const list: any = service.getList(1);
    expect(list instanceof Observable).toBeTruthy();
  });

  it ('getListTest validate return first page', () => {
    const list: any = service.getList(0);
    expect(list instanceof Observable).toBeTruthy();
  });

  // endregion good faith

  // region bad faith

  it ('getListTest validate negative integer ', () => {
    const list: any = service.getList(-1);
    expect(list).toBeNull();
  });

  // region bad faith

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
