import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() title: string = '';
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() default: number = 50;
  @Input() unit: string = 'px';
  @Output() onChange = new EventEmitter<string>();

  value: number;
  ngOnInit() {
    this.value = this.default;
  }

  changeRange(value: string) {
    this.value = Number(value);
    this.onChange.emit(value + this.unit);
  }

  reset(){
    this.value = this.default;
  }
}
