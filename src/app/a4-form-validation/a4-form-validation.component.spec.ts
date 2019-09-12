import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A4FormValidationComponent } from './a4-form-validation.component';

describe('A4FormValidationComponent', () => {
  let component: A4FormValidationComponent;
  let fixture: ComponentFixture<A4FormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A4FormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A4FormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
