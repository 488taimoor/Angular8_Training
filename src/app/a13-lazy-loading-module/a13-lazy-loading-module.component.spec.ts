import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A13LazyLoadingModuleComponent } from './a13-lazy-loading-module.component';

describe('A13LazyLoadingModuleComponent', () => {
  let component: A13LazyLoadingModuleComponent;
  let fixture: ComponentFixture<A13LazyLoadingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A13LazyLoadingModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A13LazyLoadingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
