import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipListPageComponent } from './starship-list-page.component';

describe('StarshipListPageComponent', () => {
  let component: StarshipListPageComponent;
  let fixture: ComponentFixture<StarshipListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
