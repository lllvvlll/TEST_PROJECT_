import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-axis-diagnosis',
  templateUrl: './axis-diagnosis.component.html',
  styleUrls: ['./axis-diagnosis.component.scss']
})
export class AxisDiagnosisComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openAxisDiagnosis(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', scrollable: true}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
