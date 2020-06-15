import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicianDeskHomeComponent } from './clinician-desk-home/clinician-desk-home.component';
import { TopPartComponent } from './clinician-desk-home/top-part/top-part.component';
import { ValuesComponent } from './clinician-desk-home/top-part/values/values.component';
import { CheifComplaintsComponent } from './clinician-desk-home/top-part/cheif-complaints/cheif-complaints.component';
import { ReviewOfSystemsComponent } from './clinician-desk-home/top-part/review-of-systems/review-of-systems.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ClinicianDeskHomeComponent, TopPartComponent, ValuesComponent, CheifComplaintsComponent, ReviewOfSystemsComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class ClinicianDeskModule { }
