import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, StarshipListUtilComponent} from '../starship-list-util/starship-list-util.component';

@Component({
  selector: 'app-starship-detail-dialog',
  templateUrl: './starship-detail-dialog.component.html',
  styleUrls: ['./starship-detail-dialog.component.scss']
})
export class StarshipDetailDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<StarshipListUtilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
