import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { CardiologyFormComponent } from './cardiology-form/cardiology-form.component';
import { AttendedCardiologyComponent } from './attended-cardiology/attended-cardiology.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
