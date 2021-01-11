import {Component, OnInit} from '@angular/core';
import {StarshipHttpService} from '../../services/starship-http.service';
import {StarshipListModel} from '../../models/starship-list-model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {StarshipDetailDialogComponent} from '../starship-detail-dialog/starship-detail-dialog.component';
import {StarshipModel} from '../../models/starship-model';

export interface DialogData {
  animal: string;
  starship: StarshipModel;
}

@Component({
  selector: 'app-starship-list-util',
  templateUrl: './starship-list-util.component.html',
  styleUrls: ['./starship-list-util.component.scss']
})
export class StarshipListUtilComponent implements OnInit {

  private _model: StarshipListModel;
  loading = false;

  constructor(
    private starshipHttpService: StarshipHttpService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.loadStarshipsList();
  }

  openDialog(starshipModel: StarshipModel): void {
    const dialogRef = this.dialog.open(StarshipDetailDialogComponent, {
      width: '250px',
      data: {starship: starshipModel, animal: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  loadStarshipsList(page = 0): void {
    this.loading = true;

    this.starshipHttpService.getCacheList(page).subscribe(
      (next) => {
        this.model = next;
        this.loading = false;
      },
      (ko) => {
        this.snackBar.open('There was some kind of error: ', null, {duration: 3000});
        console.log(ko);
        this.loading = false;
      }
    );
  }

  errorHandler(event): void {
    event.target.src = '/assets/not-found.jpg';
  }

  onEventPagination(event: any) {
    this.loadStarshipsList(event.pageIndex + 1);
  }

  // Getters and Setters

  get model(): StarshipListModel {
    return this._model;
  }

  set model(value: StarshipListModel) {
    this._model = value;
  }
}
