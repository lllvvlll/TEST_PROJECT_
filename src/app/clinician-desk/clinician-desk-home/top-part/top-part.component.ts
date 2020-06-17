import {Component, OnInit} from '@angular/core';
import {PatientsService} from '../../../services/patients.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-top-part',
  templateUrl: './top-part.component.html',
  styleUrls: ['./top-part.component.scss']
})
export class TopPartComponent implements OnInit {
  patient: any;

  constructor(private patientService: PatientsService, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.queryParams.subscribe(res => {
      console.log('res', this.patientService.getPatientsMocked('queue').find(item => item.id == res.id));
      this.patient = this.patientService.getPatientsMocked('queue').find(item => item.id == res.id);
      console.log('patient', this.patient);

    });
  }

  ngOnInit() {
  }

}
