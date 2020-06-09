import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientComponent } from './components/patient/patient.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CardiologyFormComponent } from './cardiology-form/cardiology-form.component';
import { AttendedCardiologyComponent } from './attended-cardiology/attended-cardiology.component';
import { AttendedFallRiskAssesmentComponent } from './attended-cardiology/attended-fall-risk-assesment/attended-fall-risk-assesment.component';
import { FormPatientComponent } from './components/form-patient/form-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    PatientComponent,
    CardiologyFormComponent,
    AttendedCardiologyComponent,
    AttendedFallRiskAssesmentComponent,
    FormPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
