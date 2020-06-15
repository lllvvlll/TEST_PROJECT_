import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicianDeskHomeComponent } from './clinician-desk-home/clinician-desk-home.component';
import { ClinicianDeskTabsComponent } from './clinician-desk-tabs/clinician-desk-tabs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ClinicianDeskHistoriesHabitsComponent } from './clinician-desk-histories-habits/clinician-desk-histories-habits.component';
import { ClinicianDeskPsychiatricHistoryComponent } from './clinician-desk-psychiatric-history/clinician-desk-psychiatric-history.component';
import { ClinicianDeskMedicalHistoryComponent } from './clinician-desk-medical-history/clinician-desk-medical-history.component';
import { ClinicianDeskSurgeriesHospitalizationComponent } from './clinician-desk-surgeries-hospitalization/clinician-desk-surgeries-hospitalization.component';
import { ClinicianDeskHomeMedicationsComponent } from './clinician-desk-home-medications/clinician-desk-home-medications.component';
import { ClinicianDeskFamilyHistoryComponent } from './clinician-desk-family-history/clinician-desk-family-history.component';
import { ClinicianDeskPersonalHistoryComponent } from './clinician-desk-personal-history/clinician-desk-personal-history.component';
import { ClinicianDeskPastPsychriticHistoryComponent } from './clinician-desk-past-psychritic-history/clinician-desk-past-psychritic-history.component';
import { ClinicianDeskPastPsychriticHospitalizationsComponent } from './clinician-desk-past-psychritic-hospitalizations/clinician-desk-past-psychritic-hospitalizations.component';
import { ClinicianDeskPastSubstanceUseHistoryComponent } from './clinician-desk-past-substance-use-history/clinician-desk-past-substance-use-history.component';
import { ClinicianDeskPsychiatricSocialHistoryComponent } from './clinician-desk-psychiatric-social-history/clinician-desk-psychiatric-social-history.component';



@NgModule({
  declarations: [ClinicianDeskHomeComponent, ClinicianDeskTabsComponent, ClinicianDeskHistoriesHabitsComponent, ClinicianDeskPsychiatricHistoryComponent, ClinicianDeskMedicalHistoryComponent, ClinicianDeskSurgeriesHospitalizationComponent, ClinicianDeskHomeMedicationsComponent, ClinicianDeskFamilyHistoryComponent, ClinicianDeskPersonalHistoryComponent, ClinicianDeskPastPsychriticHistoryComponent, ClinicianDeskPastPsychriticHospitalizationsComponent, ClinicianDeskPastSubstanceUseHistoryComponent, ClinicianDeskPsychiatricSocialHistoryComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class ClinicianDeskModule { }
