import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/models/patient';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {
  
  @Input("patient") patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
