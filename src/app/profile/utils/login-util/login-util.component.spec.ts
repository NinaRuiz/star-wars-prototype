import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUtilComponent } from './login-util.component';

describe('LoginUtilComponent', () => {
  let component: LoginUtilComponent;
  let fixture: ComponentFixture<LoginUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUtilComponent ]
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
