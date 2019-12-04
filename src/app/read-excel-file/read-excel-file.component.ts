import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-excel-file',
  templateUrl: './read-excel-file.component.html',
  styleUrls: ['./read-excel-file.component.css']
})
export class ReadExcelFileComponent implements OnInit {
  data;
  constructor() { }

  ngOnInit() {
  }
readURL(evt: any) {
  /* wire up file reader */
  const target: DataTransfer = <DataTransfer>(evt.target);
  if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    /* read workbook */
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

    /* grab first sheet */
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    /* save data */
    this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
    console.log('this is data', this.data)
  };
  reader.readAsBinaryString(target.files[0]);
}
}
