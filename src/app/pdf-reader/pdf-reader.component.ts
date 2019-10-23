import { Component, OnInit } from '@angular/core';
import * as PDFJS from 'pdfjs-dist/build/pdf';
// const fs = require('fs') 



@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {

  constructor() { }
  fileToUpload;

  ngOnInit() {
    
    
  }
  postMethod(files: FileList) {
    this.fileToUpload = files.item(0); 
    PDFJS.getDocument('./sample.pdf').then((pdf)=>{
      console.log('this file has '+ pdf._pdfInfo.numPages +" pages")
      

      pdf.getPage(1).then( function(page){
          page.getTextContent(true, false).then( function(textContent){
              console.log('this is text', textContent)
          })
      })
      
  }).catch((err)=>{

  })
    }

}
