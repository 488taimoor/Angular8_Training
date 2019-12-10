import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToPDFComponent } from './html-to-pdf.component';

describe('HtmlToPDFComponent', () => {
  let component: HtmlToPDFComponent;
  let fixture: ComponentFixture<HtmlToPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlToPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlToPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
