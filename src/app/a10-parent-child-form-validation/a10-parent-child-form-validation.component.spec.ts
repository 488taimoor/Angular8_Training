import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A10ParentChildFormValidationComponent } from './a10-parent-child-form-validation.component';

describe('A10ParentChildFormValidationComponent', () => {
  let component: A10ParentChildFormValidationComponent;
  let fixture: ComponentFixture<A10ParentChildFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A10ParentChildFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A10ParentChildFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
