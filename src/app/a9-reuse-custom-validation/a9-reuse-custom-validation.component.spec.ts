import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A9ReuseCustomValidationComponent } from './a9-reuse-custom-validation.component';

describe('A9ReuseCustomValidationComponent', () => {
  let component: A9ReuseCustomValidationComponent;
  let fixture: ComponentFixture<A9ReuseCustomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A9ReuseCustomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A9ReuseCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
