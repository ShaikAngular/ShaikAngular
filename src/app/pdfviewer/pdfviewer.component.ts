import { Component, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';

import 'jspdf-autotable';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  src1 ="hello";
  constructor() { }
  ngOnInit(): void {
  }
  title = 'jspdf-autotable-demo';

  head = [['ID', 'Country', 'Rank', 'Capital']]

  data = [
    [1, 'Finland', 7.632, 'Helsinki'],
    [2, 'Norway', 7.594, 'Oslo'],
    [3, 'Denmark', 7.555, 'Copenhagen'],
    [4, 'Iceland', 7.495, 'Reykjavík'],
    [5, 'Switzerland', 7.487, 'Bern'],
    [9, 'Sweden', 7.314, 'Stockholm'],
    [73, 'Belarus', 5.483, 'Minsk'],
  ]

  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('My PDF Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    // (doc as any).autoTable({
    //   head: this.head,
    //   body: this.data,
    //   theme: 'plain',
    //   didDrawCell: data => {
    //     console.log(data.column.index)
    //   }
    // })

    // Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // Download PDF document  
    //doc.save('table.pdf');
  }
  
  
}
