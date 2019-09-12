import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingPracticeComponent } from './styling-practice.component';

describe('StylingPracticeComponent', () => {
  let component: StylingPracticeComponent;
  let fixture: ComponentFixture<StylingPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylingPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
