import { Injectable } from '@angular/core';
import { Patient } from 'src/models/patient';
import { PatientsListComponent } from '../patients-list/patients-list.component';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor() { }

  getPatientsMocked() {
    let res: Patient[];
    res = [
      {
      id:1,
      name:"Jennifer Dezousa Labadia",
      age:"26Y 12M 6D",
      birthDate:"19-02-1993",
      gender:"Female ",
      mrn:"247766 ",
      pvrNo:"6565632 ",
      doctor:" Moammed Houcem Ameour [Cardiology]",
      imageUrl:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
    },
    {
      id:2,
      name:"Fatimah Abdul Azeez",
      age:"26Y 12M 6D",
      birthDate:"25-02-2011",
      gender:"Female ",
      mrn:"247766 ",
      pvrNo:"6565632 ",
      doctor:" Moammed Houcem Ameour [Cardiology]",
      imageUrl:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
    },
    {
      id:1,
      name:"Jennifer Dezousa Labadia",
      age:"26Y 12M 6D",
      birthDate:"19-02-1993",
      gender:"Female ",
      mrn:"247766 ",
      pvrNo:"6565632 ",
      doctor:" Moammed Houcem Ameour [Cardiology]",
      imageUrl:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
    },
    {
      id:1,
      name:"Jennifer Dezousa Labadia",
      age:"26Y 12M 6D",
      birthDate:"19-02-1993",
      gender:"Female ",
      mrn:"247766 ",
      pvrNo:"6565632 ",
      doctor:" Moammed Houcem Ameour [Cardiology]",
      imageUrl:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
    },
    {
      id:1,
      name:"Jennifer Dezousa Labadia",
      age:"26Y 12M 6D",
      birthDate:"19-02-1993",
      gender:"Female ",
      mrn:"247766 ",
      pvrNo:"6565632 ",
      doctor:" Moammed Houcem Ameour [Cardiology]",
      imageUrl:"https://www.tubefilter.com/wp-content/uploads/2019/11/dobrik-people.jpg",
    },
  
  ];
    
  }
}
