import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent {
  @Input() title: string = '';
  @Input() default: string = '#7a8590';
  @Output() onChange = new EventEmitter<string>();

  value: string;
  ngOnInit() {
    this.value = this.default;
  }

  changeColor(value: string) {
    this.value = value;
    this.onChange.emit(value);
  }
}
