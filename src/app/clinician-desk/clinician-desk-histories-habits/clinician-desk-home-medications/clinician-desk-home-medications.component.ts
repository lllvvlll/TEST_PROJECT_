import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HomeMedicationsModalComponent} from '../../../components/home-medications-modal/home-medications-modal.component';

@Component({
  selector: 'app-clinician-desk-home-medications',
  templateUrl: './clinician-desk-home-medications.component.html',
  styleUrls: ['./clinician-desk-home-medications.component.scss']
})
export class ClinicianDeskHomeMedicationsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openHomeMedications() {
    this.modalService.open(HomeMedicationsModalComponent,
      { ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: true }).result.then((result) => {
    }, (reason) => {
    });
  }

}
