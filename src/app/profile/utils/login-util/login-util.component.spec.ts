import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUtilComponent } from './login-util.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginUtilComponent', () => {
  let component: LoginUtilComponent;
  let fixture: ComponentFixture<LoginUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUtilComponent ],
      imports: [MatSnackBarModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
