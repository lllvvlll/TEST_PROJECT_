import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientsService } from '../services/patients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attended-cardiology',
  templateUrl: './attended-cardiology.component.html',
  styleUrls: ['./attended-cardiology.component.scss']
})
export class AttendedCardiologyComponent implements OnInit {
  patient: any;

  constructor(private activatedRouter:ActivatedRoute,private modalService: NgbModal,private patientService: PatientsService) {
    this.activatedRouter.queryParams.subscribe(res => {
      console.log("res",res.id);
      this.patient = this.patientService.getPatientsMocked('attended').find(item => item.id == res.id);
      // console.log("patient",this.patient);

    })
    this.painAssessments = this.patientService.getPainAssessments();
   }
  painAssessments: any[];
  selectedAssessment: any;
  fallRiskAssessment: {
    specialNeeds: number,
    history: number,
    heprin: number,
    secondaryDiagnosis: number,
    medicationAffect: number

  } = {
      specialNeeds: 0,
      history: 0,
      heprin: 0,
      secondaryDiagnosis: 0,
      medicationAffect: 0
    };

  fallRiskTotal;

  ngOnInit() {
  }

  openFallRisk(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openPainAssessment(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openHomeMedications(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: true }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openNurseNotes(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openDiagnosesAndOrders(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', scrollable: true }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  handleNgModelChange() {

    this.fallRiskTotal = Object.values(this.fallRiskAssessment).reduce((a, b) => parseInt(a.toString()) + parseInt(b.toString()));
  }
}
