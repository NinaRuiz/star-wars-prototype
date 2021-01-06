import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListUtilComponent } from './starship-list-util.component';

describe('StarshipListUtilComponent', () => {
  let component: StarshipListUtilComponent;
  let fixture: ComponentFixture<StarshipListUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipListUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipListUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
