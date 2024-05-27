import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent {

  @Output() close = new EventEmitter();

  onClose(){
    this.close.emit();
  }
}
