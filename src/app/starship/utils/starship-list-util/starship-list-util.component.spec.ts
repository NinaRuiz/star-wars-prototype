import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListUtilComponent } from './starship-list-util.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterTestingModule} from '@angular/router/testing';

describe('StarshipListUtilComponent', () => {
  let component: StarshipListUtilComponent;
  let fixture: ComponentFixture<StarshipListUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipListUtilComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
  })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipListUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
