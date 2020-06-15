import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientComponent } from './components/patient/patient.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardiologyFormComponent } from './cardiology-form/cardiology-form.component';
import { AttendedCardiologyComponent } from './attended-cardiology/attended-cardiology.component';
import { AttendedFallRiskAssesmentComponent } from './attended-cardiology/attended-fall-risk-assesment/attended-fall-risk-assesment.component';
import { FormPatientComponent } from './components/form-patient/form-patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClinicianDeskModule} from './clinician-desk/clinician-desk.module';
import { InputWithCheckboxComponent } from './components/input-with-checkbox/input-with-checkbox.component';
import {SharedModule} from './shared/shared.module';
import { HomeMedicationsModalComponent } from './components/home-medications-modal/home-medications-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    CardiologyFormComponent,
    AttendedCardiologyComponent,
    AttendedFallRiskAssesmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ClinicianDeskModule,
    SharedModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
