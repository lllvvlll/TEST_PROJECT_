import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-medications-modal',
  templateUrl: './home-medications-modal.component.html',
  styleUrls: ['./home-medications-modal.component.scss']
})
export class HomeMedicationsModalComponent implements OnInit {

  constructor(private activatedRouter: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

}
