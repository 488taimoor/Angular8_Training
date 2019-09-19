import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A14ChildViewParentComponent } from './a14-child-view-parent.component';

describe('A14ChildViewParentComponent', () => {
  let component: A14ChildViewParentComponent;
  let fixture: ComponentFixture<A14ChildViewParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A14ChildViewParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A14ChildViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
