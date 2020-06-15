import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientComponent} from '../components/patient/patient.component';
import {FormPatientComponent} from '../components/form-patient/form-patient.component';
import {InputWithCheckboxComponent} from '../components/input-with-checkbox/input-with-checkbox.component';
import {HomeMedicationsModalComponent} from '../components/home-medications-modal/home-medications-modal.component';


@NgModule({
  declarations: [
    PatientComponent,
    FormPatientComponent,
    InputWithCheckboxComponent,
    HomeMedicationsModalComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    PatientComponent,
    FormPatientComponent,
    InputWithCheckboxComponent,
    HomeMedicationsModalComponent,

  ],
  entryComponents: [HomeMedicationsModalComponent]
})
export class SharedModule {
}
