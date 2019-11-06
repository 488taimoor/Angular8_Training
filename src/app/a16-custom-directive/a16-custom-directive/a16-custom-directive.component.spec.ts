import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A16CustomDirectiveComponent } from './a16-custom-directive.component';

describe('A16CustomDirectiveComponent', () => {
  let component: A16CustomDirectiveComponent;
  let fixture: ComponentFixture<A16CustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A16CustomDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A16CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
