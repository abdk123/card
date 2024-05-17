import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-right-modal',
  templateUrl: './right-modal.component.html',
  styleUrls: ['./right-modal.component.css']
})
export class RightModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef,){}
  ngOnInit(): void {
    
  }
}
