import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-desk-psychiatric-social-history',
  templateUrl: './clinician-desk-psychiatric-social-history.component.html',
  styleUrls: ['./clinician-desk-psychiatric-social-history.component.scss']
})
export class ClinicianDeskPsychiatricSocialHistoryComponent implements OnInit {


  childHoodQuestions = [
    {
      id: 1,
      question: 'Emotional Abuse',
      label: 'emotional-abuse',
      disabled: true,
    },
    {
      id: 2,
      question: 'Physical Abuse',
      label: 'physical-abuse',
      disabled: true,
    },
    {
      id: 3,
      question: 'Sexual Abuse',
      label: 'sexual-abuse',
      disabled: true,
    }
  ];

  disableOthersEducations : boolean = true;
  disableDivorcedInput : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  handleChangeRadio(id) {
    this.childHoodQuestions.map(item => {
      if (item.id == id) {
        item.disabled = false;
      }
    });
  }


  handleChangeEducationSelect($event){
    // console.log("event",$event.target.value);
    this.disableOthersEducations = $event.target.value !== 'others';
  }
}
