import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A15CompleteStructureforValidationComponent } from './a15-complete-structurefor-validation.component';

describe('A15CompleteStructureforValidationComponent', () => {
  let component: A15CompleteStructureforValidationComponent;
  let fixture: ComponentFixture<A15CompleteStructureforValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A15CompleteStructureforValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A15CompleteStructureforValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
