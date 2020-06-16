import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-of-systems',
  templateUrl: './review-of-systems.component.html',
  styleUrls: ['./review-of-systems.component.scss']
})
export class ReviewOfSystemsComponent implements OnInit {

  pmaUnDisabled = true;
  paranDisabled = true;
  pmaRetDisabled = true;
  pmaIncDisabled = true;
  sleepDistDisabled = true;
  pmaStereoDisabled = true;
  interestDisabled = true;
  pmaMannDisabled = true;
  guiltDisabled = true;
  energyDisabled = true;
  concentDisabled = true;
  anxDisabled = true;
  appDisabled = true;
  depresDisabled = true;
  memLossDisabled = true;
  mentalDisDisabled = true;
  suicIdeaDisabled = true;
  halluciDisabled = true;

  // ----------------
  pmaUnText = '';
  paranText = '';
  pmaRetText = '';
  pmaIncText = '';
  sleepDistText = '';
  pmaStereoText = '';
  interestText = '';
  pmaMannText = '';
  guiltText = '';
  energyText = '';
  concentText = '';
  anxText = '';
  appText = '';
  depresText = '';
  memLossText = '';
  mentalDisText = '';
  suicIdeaText = '';
  halluciText = '';
  // ----------
  reviewSystem = '';

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openReviewOfSystemsModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  pmaUnChanged(e) {
    console.log(e);
    if (e.target.value === 'yes') {
      this.reviewSystem = 'Currently complaints of PMA unremarkable,';
    } else if (e.target.value === 'no') {
      this.reviewSystem = 'Currently complaints of PMA unremarkable,';
    }
    this.pmaUnDisabled = false;

  }
}
