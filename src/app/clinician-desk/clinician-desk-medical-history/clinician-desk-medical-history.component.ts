import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clinician-desk-medical-history',
  templateUrl: './clinician-desk-medical-history.component.html',
  styleUrls: ['./clinician-desk-medical-history.component.scss']
})
export class ClinicianDeskMedicalHistoryComponent implements OnInit {


  inputs = [
    'anemia',
    'Hypertension',
    'Musculoskeletal',
    'Tuberculosis',
    'CVS',
    'Hypercholesterolemia',
    'Neurological',
    'Thyroid Disorder',
    'Diabetes Millitus',
    ' Ischemic Heart Disease',
    'Respiratory',
    'Valvular Heart Disease',
    'Genitourinary',
    'Liver & GIT',
    'Renal Diseases',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
