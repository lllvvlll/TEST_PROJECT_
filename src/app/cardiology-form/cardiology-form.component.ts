import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/models/patient';
import { PatientsService } from '../services/patients.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-cardiology-form',
  templateUrl: './cardiology-form.component.html',
  styleUrls: ['./cardiology-form.component.scss']
})
export class CardiologyFormComponent implements OnInit {

  patient: any;
  painAssessments: any[];
  selectedAssessment: any;
  fallRiskAssessment: {
    specialNeeds: number,
    history: number,
    heprin: number,
    secondaryDiagnosis: number,
    medicationAffect: number

  }= {
    specialNeeds: 0,
    history: 0,
    heprin: 0,
    secondaryDiagnosis: 0,
    medicationAffect: 0
  };

  fallRiskTotal;

  constructor(private activatedRouter:ActivatedRoute, private patientService: PatientsService) { 
     this.activatedRouter.queryParams.subscribe(res => {
        console.log("res",res.id);
        this.patient = this.patientService.getPatientsMocked('queue').find(item => item.id == res.id);
        this.painAssessments = this.patientService.getPainAssessments();
        // console.log("patient",this.patient);

      })

  }

  handleNgModelChange(){

    this.fallRiskTotal = Object.values(this.fallRiskAssessment).reduce((a,b) => parseInt(a.toString()) + parseInt(b.toString()) );
  }
  ngOnInit() {
  }

}
