import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A1NestedFormGroupComponent } from './a1-nested-form-group.component';

describe('A1NestedFormGroupComponent', () => {
  let component: A1NestedFormGroupComponent;
  let fixture: ComponentFixture<A1NestedFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A1NestedFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A1NestedFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
