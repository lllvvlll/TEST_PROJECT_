import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-desk-family-history',
  templateUrl: './clinician-desk-family-history.component.html',
  styleUrls: ['./clinician-desk-family-history.component.scss']
})
export class ClinicianDeskFamilyHistoryComponent implements OnInit {

  inputs = [
    'Asthma',
    'Haemoglobinopathies',
    'Inherited diseases',
    'Congenital Anomalies',
    'Hypertension',
    'Endocrine Diseases',
    'Diabetes Millitus',
    'Infections',
    'Malignancy',
  ];
  constructor() { }

  ngOnInit() {
  }

}
