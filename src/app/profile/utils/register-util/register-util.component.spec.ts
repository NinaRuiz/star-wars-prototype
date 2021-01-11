import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUtilComponent } from './register-util.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterTestingModule} from '@angular/router/testing';

describe('RegisterUtilComponent', () => {
  let component: RegisterUtilComponent;
  let fixture: ComponentFixture<RegisterUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUtilComponent ],
      imports: [MatSnackBarModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
