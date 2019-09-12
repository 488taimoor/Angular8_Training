import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A2SetValuesAndPatchValuesComponent } from './a2-set-values-and-patch-values.component';

describe('A2SetValuesAndPatchValuesComponent', () => {
  let component: A2SetValuesAndPatchValuesComponent;
  let fixture: ComponentFixture<A2SetValuesAndPatchValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A2SetValuesAndPatchValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A2SetValuesAndPatchValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
