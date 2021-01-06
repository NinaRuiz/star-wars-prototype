import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {StarshipModel} from '../models/starship-model';
import {StarshipMapper} from '../mappers/starship-mapper';
import {Observable} from 'rxjs';
import {StarshipListModel} from '../models/starship-list-model';

@Injectable({
  providedIn: 'root'
})
export class StarshipHttpService {

  private tableURL = 'starships/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(pageNumber: number): Observable<StarshipListModel> {
    return this.httpClient.get(environment.apiURL + this.tableURL, {
      params: {
        page: pageNumber.toString()
      }
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
