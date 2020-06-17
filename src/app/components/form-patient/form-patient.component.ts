import {Component, OnInit, Input} from '@angular/core';
import {Patient} from 'src/models/patient';
import {PatientsService} from '../../services/patients.service';

@Component({
  selector: 'app-form-patient',
  templateUrl: './form-patient.component.html',
  styleUrls: ['./form-patient.component.scss']
})
export class FormPatientComponent implements OnInit {

  @Input('patient') patient: Patient;
  shrink = false;

  constructor() {
    PatientsService.observerHeader.subscribe((value) => {
      this.shrink = value;

    });
  }

  ngOnInit() {
  }

}
