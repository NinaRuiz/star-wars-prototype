import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, shareReplay} from 'rxjs/operators';
import {StarshipModel} from '../models/starship-model';
import {StarshipMapper} from '../mappers/starship-mapper';
import {Observable} from 'rxjs';
import {StarshipListModel} from '../models/starship-list-model';

@Injectable({
  providedIn: 'root'
})
export class StarshipHttpService {

  private cache$ = {};

  private tableURL = 'starships/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCacheList(pageNumber: number): Observable<StarshipListModel> {
    if (!this.cache$[pageNumber]) {
      this.cache$[pageNumber] = this.getList(pageNumber).pipe(
        shareReplay(1)
      );
    }

    return this.cache$[pageNumber];
  }

  getList(pageNumber: number): Observable<StarshipListModel> {

    let filters = {};

    if (pageNumber !== 0) {
      filters = {
        page: pageNumber
      };
    }

    return this.httpClient.get(environment.apiURL + this.tableURL, {
      params: filters
    }).pipe(
      map(
        response => {
          return StarshipMapper.mapList(response);
        }
      )
    );
  }

  getById() {

  }

  create() {

  }

  update() {

  }

  delete() {

  }
}
