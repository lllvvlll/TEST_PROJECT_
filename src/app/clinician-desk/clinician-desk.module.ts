import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClinicianDeskHomeComponent} from './clinician-desk-home/clinician-desk-home.component';
import {TopPartComponent} from './clinician-desk-home/top-part/top-part.component';
import {ValuesComponent} from './clinician-desk-home/top-part/values/values.component';
import {CheifComplaintsComponent} from './clinician-desk-home/top-part/cheif-complaints/cheif-complaints.component';
import {ReviewOfSystemsComponent} from './clinician-desk-home/top-part/review-of-systems/review-of-systems.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormsModule} from '@angular/forms';
import {ClinicianDeskTabsComponent} from './clinician-desk-tabs/clinician-desk-tabs.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClinicianDeskHistoriesHabitsComponent} from './clinician-desk-histories-habits/clinician-desk-histories-habits.component';
import {ClinicianDeskPsychiatricHistoryComponent} from './clinician-desk-psychiatric-history/clinician-desk-psychiatric-history.component';
import {ClinicianDeskMedicalHistoryComponent} from './clinician-desk-histories-habits/clinician-desk-medical-history/clinician-desk-medical-history.component';
import {ClinicianDeskSurgeriesHospitalizationComponent} from './clinician-desk-histories-habits/clinician-desk-surgeries-hospitalization/clinician-desk-surgeries-hospitalization.component';
import {ClinicianDeskHomeMedicationsComponent} from './clinician-desk-histories-habits/clinician-desk-home-medications/clinician-desk-home-medications.component';
import {ClinicianDeskFamilyHistoryComponent} from './clinician-desk-histories-habits/clinician-desk-family-history/clinician-desk-family-history.component';
import {ClinicianDeskPersonalHistoryComponent} from './clinician-desk-histories-habits/clinician-desk-personal-history/clinician-desk-personal-history.component';
import {ClinicianDeskPastPsychriticHistoryComponent} from './clinician-desk-psychiatric-history/clinician-desk-past-psychritic-history/clinician-desk-past-psychritic-history.component';
import {ClinicianDeskPastPsychriticHospitalizationsComponent} from './clinician-desk-psychiatric-history/clinician-desk-past-psychritic-hospitalizations/clinician-desk-past-psychritic-hospitalizations.component';
import {ClinicianDeskPastSubstanceUseHistoryComponent} from './clinician-desk-psychiatric-history/clinician-desk-past-substance-use-history/clinician-desk-past-substance-use-history.component';
import {ClinicianDeskPsychiatricSocialHistoryComponent} from './clinician-desk-psychiatric-history/clinician-desk-psychiatric-social-history/clinician-desk-psychiatric-social-history.component';
import {SharedModule} from "../shared/shared.module";
import { RightPartComponent } from './clinician-desk-home/right-part/right-part.component';
import { PsychiatricExamComponent } from './clinician-desk-home/right-part/psychiatric-exam/psychiatric-exam.component';
import { AxisDiagnosisComponent } from './clinician-desk-home/right-part/axis-diagnosis/axis-diagnosis.component';
import { TreatmentPlanAndRecomendationsComponent } from './clinician-desk-home/right-part/treatment-plan-and-recomendations/treatment-plan-and-recomendations.component';
import { MentalStatusExamComponent } from './clinician-desk-home/right-part/mental-status-exam/mental-status-exam.component';
import { BottomPartComponent } from './clinician-desk-home/bottom-part/bottom-part.component';


@NgModule({
  declarations: [ValuesComponent, TopPartComponent, ReviewOfSystemsComponent, ClinicianDeskHomeComponent,
    ClinicianDeskTabsComponent, CheifComplaintsComponent,
    ClinicianDeskHistoriesHabitsComponent, ClinicianDeskPsychiatricHistoryComponent,
    ClinicianDeskMedicalHistoryComponent, ClinicianDeskSurgeriesHospitalizationComponent,
    ClinicianDeskHomeMedicationsComponent, ClinicianDeskFamilyHistoryComponent,
    ClinicianDeskPersonalHistoryComponent, ClinicianDeskPastPsychriticHistoryComponent,
    ClinicianDeskPastPsychriticHospitalizationsComponent, ClinicianDeskPastSubstanceUseHistoryComponent,
    ClinicianDeskPsychiatricSocialHistoryComponent,
    RightPartComponent,
    PsychiatricExamComponent,
    AxisDiagnosisComponent,
    TreatmentPlanAndRecomendationsComponent,
    MentalStatusExamComponent,
    BottomPartComponent],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class ClinicianDeskModule {
}
