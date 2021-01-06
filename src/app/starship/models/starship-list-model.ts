import {StarshipModel} from './starship-model';

export class StarshipListModel {

  private _starshipList: StarshipModel[];

  private _pageSize: number;

  private _pageNumber: number;

  private _totalPages: number;

  private _totalElements: number;

  private _size: number;

  private _numberOfElements: number;


  get starshipList(): StarshipModel[] {
    return this._starshipList;
  }

  set starshipList(value: StarshipModel[]) {
    this._starshipList = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get numberOfElements(): number {
    return this._numberOfElements;
  }

  set numberOfElements(value: number) {
    this._numberOfElements = value;
  }

  constructor() {
  }
}
