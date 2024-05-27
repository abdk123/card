import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-danger' = 'primary';
  @Input() disabled = false;
  @Input() btnWidth: string = '';
  @Input() rounded: string = 'rounded';

  @Output() click = new EventEmitter();

  get buttonClass() {
    const baseClass =
      'px-2 py-1 md:px-4 md:py-3 font-semibold transform transition-transform duration-200 w-full';
    const typeClass = {
      primary: 'bg-blue-400 text-white hover:bg-blue-500 ',
      secondary: 'bg-gray-500 text-white hover:bg-gray-700 ',
      danger: 'bg-red-500 text-white hover:bg-red-700 ',
      'outline-primary':
        'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white ',
      'outline-secondary':
        'border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white ',
      'outline-danger':
        'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white ',
    };
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    return `${baseClass} ${typeClass[this.type]} ${disabledClass} ${
      this.rounded
    } ${this.btnWidth}`;
  }

  onClick(){
    this.click.emit();
  }
}
