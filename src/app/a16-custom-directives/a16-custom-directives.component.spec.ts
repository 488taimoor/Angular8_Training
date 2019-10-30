import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A16CustomDirectivesComponent } from './a16-custom-directives.component';

describe('A16CustomDirectivesComponent', () => {
  let component: A16CustomDirectivesComponent;
  let fixture: ComponentFixture<A16CustomDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A16CustomDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A16CustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
