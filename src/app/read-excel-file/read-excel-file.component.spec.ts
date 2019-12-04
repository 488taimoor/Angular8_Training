import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadExcelFileComponent } from './read-excel-file.component';

describe('ReadExcelFileComponent', () => {
  let component: ReadExcelFileComponent;
  let fixture: ComponentFixture<ReadExcelFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadExcelFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadExcelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
