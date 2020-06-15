import {Component, OnInit} from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-cheif-complaints',
  templateUrl: './cheif-complaints.component.html',
  styleUrls: ['./cheif-complaints.component.scss']
})
export class CheifComplaintsComponent implements OnInit {

  constructor() {
  }

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  firstItemDescription = 'Patients Comes in for Psychiatric evaluation of Panic Attacks\n' +
    'The Patient experiences a discrete period of intense fear or discomfort which develops' +
    ' abruptly and reached a peak within 10 minutes.\n' +
    'The attacks may last as much as 2 hours and occur 3 times a week mostly at' +
    ' work.Factors modifying or precipitating attacks are the following:' +
    ' good diet and exercise mitigate attacks, stress at work precipitate attacks.\n' +
    'Additional symptoms include:\n' +
    'Palpitations, pounding heart, or accelerated heart rate: yes\n' +
    'Sweating: yes\n' +
    'Trembling or shaking: no\n' +
    'Sensations of shortness of breath or smothering: no\n' +
    'Feeling of choking: yes frequently\n' +
    'Chest pain or discomfort: no\n' +
    'Nausea or abdominal distress: yes\n' +
    'Feeling dizzy, unsteady, lightheaded, or faint: no\n' +
    'Derealization: no\n' +
    'Fear of losing control or going crazy: no\n' +
    'Fear of dying: no\n' +
    'Paresthesias: no\n' +
    'Chills or hot flushes: no\n' +
    'Patient was treated about 5 years ago with similar complaints which responded well to medication.';

  ngOnInit() {
    this.dropdownList = [
      {item_id: 1, item_text: 'Panic Attacks', item_description: this.firstItemDescription},
      {item_id: 2, item_text: 'Bipolar Disorder', item_description: 'none'},
      {item_id: 3, item_text: 'Depression', item_description: 'none'},
      {item_id: 4, item_text: 'Personality Disorder', item_description: 'none'},
      {item_id: 5, item_text: 'Seasonal Affective Disorder', item_description: 'none'}
    ];
    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
