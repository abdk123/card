import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GradientModel } from '../../models/common/gradient.model';
import { StyleModel } from '../../models/style.model';

@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.component.html',
  styleUrls: ['./gradient.component.css'],
})
export class GradientComponent implements OnInit {
  @Output() onChange = new EventEmitter<StyleModel>();
  gradient: any;
  model: GradientModel = new GradientModel();

  ngOnInit(): void {
    this.model = new GradientModel({
      from: '#66f542',
      to: '#4260f5',
      direction: 'to top',
      type: 'background',
    });
    this.gradient = {'background':this.model.getValue()};
  }

  onChangeDirection(arg: any) {
    this.model.direction = arg.target.value;
    this.emitChange()
    
  }

  changeFromColor(value: string) {
    alert(value);
    this.model.from = value;
    this.emitChange()
  }

  changeToColor(value: string) {
    this.model.to = value;
    this.emitChange()
  }

  emitChange(){
    this.gradient = {'background':this.model.getValue()};
    this.onChange.emit(
      new StyleModel({
        type: 'style',
        name: 'background',
        value: this.model.getValue(),
      })
    );
  }

  reset(){
    this.onChange.emit(
      new StyleModel({
        type: 'style',
        name: 'background',
        value: '',
      })
    );
  }
}
