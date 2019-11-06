import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiModuleComponent } from './multi-module.component';

describe('MultiModuleComponent', () => {
  let component: MultiModuleComponent;
  let fixture: ComponentFixture<MultiModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
