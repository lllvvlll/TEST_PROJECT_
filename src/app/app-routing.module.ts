import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { CardiologyFormComponent } from './cardiology-form/cardiology-form.component';


const routes: Routes = [
  {
    path:'',
    component: PatientsListComponent
  },
  {
    path:'cardiology-form',
    component: CardiologyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
