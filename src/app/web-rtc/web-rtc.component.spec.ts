import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRTCComponent } from './web-rtc.component';

describe('WebRTCComponent', () => {
  let component: WebRTCComponent;
  let fixture: ComponentFixture<WebRTCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebRTCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebRTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
