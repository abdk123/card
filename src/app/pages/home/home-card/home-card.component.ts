import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  constructor(private modalService: ModalService) {}
  
  get cardClass(){
    const baseClass = 'flex justify-between items-center mt-4 shadow-lg rounded-xl';
    let classes = 'px-4 py-4 my-2'
    return `${baseClass} ${classes}`;
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService
      .open(modalTemplate, { size: 'lg', title: 'Title' })
      .subscribe((action) => {
        
      });
  }
  
}
