import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A8CustomValidationWithParameterComponent } from './a8-custom-validation-with-parameter.component';

describe('A8CustomValidationWithParameterComponent', () => {
  let component: A8CustomValidationWithParameterComponent;
  let fixture: ComponentFixture<A8CustomValidationWithParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A8CustomValidationWithParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A8CustomValidationWithParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
