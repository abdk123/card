import { Component, EventEmitter, Output } from '@angular/core';
import { StyleModel } from '../../models/style.model';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  @Output() onChange = new EventEmitter<StyleModel>();
  gradiant:string;

  onChangeGradient(style:StyleModel){
    this.onChange.emit(style);
  }

  onChangeColor(value: string) {
    this.onChange.emit(new StyleModel({
      type:'style',
      name:'background',
      value:value
    }));
  }

}
