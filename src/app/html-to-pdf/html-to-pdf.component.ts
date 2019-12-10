import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.css']
})
export class HtmlToPDFComponent implements OnInit {

  constructor() { }

  ngOnInit() {


//     var doc = new jsPDF();   

// doc.html(document.getElementById('print'), {
//    callback: function (doc) {
//      doc.save('a3.pdf');
//    }  
// });

    
    var doc = new jsPDF()

    // doc.text('Hello world!', 10, 10)
         
var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.getElementById("print")
console.log('this is source ', source)
doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

// doc.output("dataurlnewwindow");
doc.save('a4.pdf')  
  } 

}
