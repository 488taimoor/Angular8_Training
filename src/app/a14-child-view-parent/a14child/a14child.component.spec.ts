import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A14childComponent } from './a14child.component';

describe('A14childComponent', () => {
  let component: A14childComponent;
  let fixture: ComponentFixture<A14childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A14childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A14childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
