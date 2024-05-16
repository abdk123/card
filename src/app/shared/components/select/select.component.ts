import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() datasource: any;
  @Input() default: string = 'solid';
  @Output() onChange = new EventEmitter<string>();

  value: string;
  ngOnInit() {
    this.value = this.default;
  }

  onSelect(value: string) {
    this.value = value;
    this.onChange.emit(value);
  }
}