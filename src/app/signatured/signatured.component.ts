import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-signatured',
  templateUrl: './signatured.component.html',
  styleUrls: ['./signatured.component.css'],
})
export class SignaturedComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content);
  }
}
