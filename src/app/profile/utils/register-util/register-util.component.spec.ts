import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUtilComponent } from './register-util.component';

describe('RegisterUtilComponent', () => {
  let component: RegisterUtilComponent;
  let fixture: ComponentFixture<RegisterUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUtilComponent ]
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
