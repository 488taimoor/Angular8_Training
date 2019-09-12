import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A5ValidationsAndLogicsInComponentComponent } from './a5-validations-and-logics-in-component.component';

describe('A5ValidationsAndLogicsInComponentComponent', () => {
  let component: A5ValidationsAndLogicsInComponentComponent;
  let fixture: ComponentFixture<A5ValidationsAndLogicsInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A5ValidationsAndLogicsInComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A5ValidationsAndLogicsInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
