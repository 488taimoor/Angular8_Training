import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A3FormBuilderComponent } from './a3-form-builder.component';

describe('A3FormBuilderComponent', () => {
  let component: A3FormBuilderComponent;
  let fixture: ComponentFixture<A3FormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A3FormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A3FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
