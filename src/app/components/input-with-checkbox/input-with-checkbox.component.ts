import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-with-checkbox',
  templateUrl: './input-with-checkbox.component.html',
  styleUrls: ['./input-with-checkbox.component.scss']
})
export class InputWithCheckboxComponent implements OnInit {

  @Input('label') set label(value) {
    this._label = value;
    this.id = value.replace(' ', '-').toLocaleLowerCase();
  };

  @Input('formControl') formControl;
  id: string;
  _label: string;

  constructor() {
    // this.id = this.label.replace(' ', '-').toLocaleLowerCase();
  }

  ngOnInit() {
  }

}
