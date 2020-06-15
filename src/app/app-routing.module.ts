import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { CardiologyFormComponent } from './cardiology-form/cardiology-form.component';
import { AttendedCardiologyComponent } from './attended-cardiology/attended-cardiology.component';
import {ClinicianDeskHomeComponent} from './clinician-desk/clinician-desk-home/clinician-desk-home.component';


const routes: Routes = [
  {
    path:'',
    component: PatientsListComponent
  },
  {
    path:'cardiology-form',
    component: CardiologyFormComponent
  },
  {
    path:'attended-cardiology-form',
    component: AttendedCardiologyComponent
  },
  {
    path:'clinician-desk',
    component: ClinicianDeskHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
