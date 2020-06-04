import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[];
  constructor(private patientsService: PatientsService) {
    this.patients = this.patientsService.getPatientsMocked();
    console.log("patients",this.patients);
   }

  ngOnInit(): void {
 
  }

}
