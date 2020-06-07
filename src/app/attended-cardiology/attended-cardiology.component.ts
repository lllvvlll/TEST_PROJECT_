import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attended-cardiology',
  templateUrl: './attended-cardiology.component.html',
  styleUrls: ['./attended-cardiology.component.scss']
})
export class AttendedCardiologyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openFallRisk(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
