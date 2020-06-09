import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient';
import { PatientsService } from '../services/patients.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[];

  selectedTab: string = "queue";
  constructor(private patientsService: PatientsService, private router: Router) {
    this.patients = this.patientsService.getPatientsMocked(this.selectedTab);
    console.log("patients",this.patients);
   }

  ngOnInit(): void {
 
  }

  openCardiologyForm(patient: Patient){
      this.router.navigate(["/cardiology-form"],{queryParams: {
        id: patient.id
      }})
  }
  openAttendedCardiologyForm(patient: Patient){
    let page = "";
    if(this.selectedTab == 'queue'){
      page = "/cardiology-form";
    }
    else if(this.selectedTab == 'attended'){
      page = "/attended-cardiology-form";
    }
    this.router.navigate([page],{queryParams: {
      id: patient.id
    }})
}

selectTab(selectedTab){
  this.selectedTab = selectedTab;
  this.patients = this.patientsService.getPatientsMocked(this.selectedTab);
}
}
