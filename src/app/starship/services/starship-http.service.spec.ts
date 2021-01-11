import { TestBed } from '@angular/core/testing';

import { StarshipHttpService } from './starship-http.service';
import {Observable} from 'rxjs';
import {StarshipListModel} from '../models/starship-list-model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {StarshipModel} from '../models/starship-model';

/**
 * Test List
 *  GetList Method
 *    Validate it return an observable x
 *    Validate when ok return a StarshipListModel x
 *    Validate it return null when page is < 0 x
 *  GetById Method
 *    Validate it return an observable
 *    Validate when ok return a StarshipModel
 */
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

  it ('getListTest validate return a StarshipListModel', () => {
    service.getList(1).subscribe(
      (ok) => {
        expect(ok).toBeInstanceOf(StarshipListModel);
      }
    );
  });

  it ('getByIdTest validate return type', () => {
    const list: any = service.getById();
    expect(list instanceof Observable).toBeTruthy();
  });

  it ('getByIdTest validate return a StarshipListModel', () => {
    service.getById().subscribe(
      (ok) => {
        expect(ok).toBeInstanceOf(StarshipModel);
      }
    );
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
