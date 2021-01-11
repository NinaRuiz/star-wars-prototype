import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipDetailDialogComponent } from './starship-detail-dialog.component';

describe('StarshipDetailDialogComponent', () => {
  let component: StarshipDetailDialogComponent;
  let fixture: ComponentFixture<StarshipDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
