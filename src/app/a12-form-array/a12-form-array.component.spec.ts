import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A12FormArrayComponent } from './a12-form-array.component';

describe('A12FormArrayComponent', () => {
  let component: A12FormArrayComponent;
  let fixture: ComponentFixture<A12FormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A12FormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A12FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
