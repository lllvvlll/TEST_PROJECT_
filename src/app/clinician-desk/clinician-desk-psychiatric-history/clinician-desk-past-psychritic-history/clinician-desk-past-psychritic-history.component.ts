import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-clinician-desk-past-psychritic-history',
  templateUrl: './clinician-desk-past-psychritic-history.component.html',
  styleUrls: ['./clinician-desk-past-psychritic-history.component.scss']
})
export class ClinicianDeskPastPsychriticHistoryComponent implements OnInit {


  questions = [
    {
      id: 1,
      question: 'Prior Outpatient psychiatric treatment in the past?',
      label: 'prior-outpatient-psychiatric',
      disabled: true,
    },
    {
      id: 2,
      question: 'Prior Outpatient alcohol/substance abuse treatment in the past?',
      label: 'prior-outpatient-alcohol',
      disabled: true,
    },
    {
      id: 3,
      question: 'Prior Outpatient treatment was helpful?',
      label: 'prior-outpatient-was-helpful',
      disabled: true,
    },
    {
      id: 4,
      question: 'Prior history of non suicidal injury (Scratching, Cutting, Burning)?',
      label: 'prior-history-of-non-suicidal-injury',
      disabled: true,
    },
    {
      id: 5,
      question: 'Prior history of suicide attempt?',
      label: 'prior-history-of-suicide-attempt',
      disabled: true,
    },
    {
      id: 6,
      question: 'Prior history of Aggression or Violence?',
      label: 'prior-history-of-aggression-or-violence?',
      disabled: true,
    },
    {
      id: 7,
      question: 'Prior Psychiatric medication tried?',
      label: 'prior-psychiatric-medication-tried?',
      disabled: true,
    },
  ];

  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgbCalendar) {
  }

  ngOnInit() {
  }

  handleChangeRadio(id) {
    this.questions.map(item => {
      if (item.id == id) {
        item.disabled = false;
      }
    });
  }
}
