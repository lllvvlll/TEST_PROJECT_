import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinician-desk-past-substance-use-history',
  templateUrl: './clinician-desk-past-substance-use-history.component.html',
  styleUrls: ['./clinician-desk-past-substance-use-history.component.scss']
})
export class ClinicianDeskPastSubstanceUseHistoryComponent implements OnInit {

  questions = [
    {
      id: 1,
      question: 'Alcohol',
      label: 'alcohol',
      disabled: true,
    },
    {
      id: 2,
      question: 'Cannabinoids',
      label: 'cannabinoids',
      disabled: true,
    },
    {
      id: 3,
      question: 'Opioids and Morphine Derivatives',
      label: 'opioids-and-morphine-derivatives',
      disabled: true,
    },
    {
      id: 4,
      question: 'Stimulants',
      label: 'stimulants',
      disabled: true,
    },
    {
      id: 5,
      question: 'Club drugs',
      label: 'club-drugs',
      disabled: true,
    },
    {
      id: 6,
      question: 'Dissociative Drugs',
      label: 'dissociative-drugs',
      disabled: true,
    },
    {
      id: 7,
      question: 'Depressants',
      label: 'depressants',
      disabled: true,
    },
    {
      id: 8,
      question: 'Hallucinogens',
      label: 'hallucinogens',
      disabled: true,
    },
    {
      id: 9,
      question: 'Anabolic steroids',
      label: 'anabolic-steroids',
      disabled: true,
    },
    {
      id: 10,
      question: 'Inhalants',
      label: 'inhalants',
      disabled: true,
    },
    {
      id: 11,
      question: 'Intavenous drug use',
      label: 'intavenous-drug-use',
      disabled: true,
    },


    {
      id: 12,
      question: 'Have you had any difficulties with any of the following issues related to substance use?',
      label: 'have-you-had-any-difficulties',
      disabled: true,
    },
    {
      id: 13,
      question: 'TOLERENCE (increased amount of substance required to obtain initial effect of the drug)',
      label: 'tolerence',
      disabled: true,
    },
  ];

  constructor() { }

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
