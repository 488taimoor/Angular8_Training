import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11ConfirmPasswordValidationComponent } from './a11-confirm-password-validation.component';

describe('A11ConfirmPasswordValidationComponent', () => {
  let component: A11ConfirmPasswordValidationComponent;
  let fixture: ComponentFixture<A11ConfirmPasswordValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11ConfirmPasswordValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11ConfirmPasswordValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
