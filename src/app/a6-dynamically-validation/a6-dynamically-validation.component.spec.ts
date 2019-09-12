import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A6DynamicallyValidationComponent } from './a6-dynamically-validation.component';

describe('A6DynamicallyValidationComponent', () => {
  let component: A6DynamicallyValidationComponent;
  let fixture: ComponentFixture<A6DynamicallyValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A6DynamicallyValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A6DynamicallyValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
