import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent {
  color:string;
  @Input() default: string = '';
  @Output() onSelect = new EventEmitter<string>();

  onClick(color:string){
    this.onSelect.emit(color);
  }
}
