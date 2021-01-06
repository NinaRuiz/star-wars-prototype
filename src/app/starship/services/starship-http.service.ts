import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {StarshipModel} from '../models/starship-model';

@Injectable({
  providedIn: 'root'
})
export class StarshipHttpService {

  private tableURL = 'starships/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getList() {
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
