import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/models/patient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-cardiology-form',
  templateUrl: './cardiology-form.component.html',
  styleUrls: ['./cardiology-form.component.scss']
})
export class CardiologyFormComponent implements OnInit {

  patient: any;
  constructor(private activatedRouter:ActivatedRoute, private patientService: PatientsService) { 
     this.activatedRouter.queryParams.subscribe(res => {
        console.log("res",res.id);
        this.patient = this.patientService.getPatientsMocked().find(item => item.id == res.id);
        console.log("patient",this.patient);

      })

  }

  ngOnInit() {
  }

}
