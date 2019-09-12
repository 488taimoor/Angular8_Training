import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A7CustomValidationComponent } from './a7-custom-validation.component';

describe('A7CustomValidationComponent', () => {
  let component: A7CustomValidationComponent;
  let fixture: ComponentFixture<A7CustomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A7CustomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A7CustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
