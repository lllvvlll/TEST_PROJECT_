import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-desk-personal-history',
  templateUrl: './clinician-desk-personal-history.component.html',
  styleUrls: ['./clinician-desk-personal-history.component.scss']
})
export class ClinicianDeskPersonalHistoryComponent implements OnInit {

  inputs = [
    'Smoking',
    'Substance Abuse',
    'Tobacco',
    'Behaviour Challenges',
  ];
  constructor() { }

  ngOnInit() {
  }

}
