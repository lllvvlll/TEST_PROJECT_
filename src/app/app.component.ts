import {Component, HostListener} from '@angular/core';
import {PatientsService} from './services/patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NRCDemo';


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log('window.scrollY:', window.scrollY);
    if (window.scrollY > 50) {
      PatientsService.observerHeader.emit(true);
    } else {
      PatientsService.observerHeader.emit(false);

    }
  }
}
