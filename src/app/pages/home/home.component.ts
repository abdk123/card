import { Component, Input, TemplateRef } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  device = 'pc';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;

  
  get buttonClass() {
    const baseClass = 'px-4 py-2 font-semibold rounded';
    const typeClass = {
      primary: 'bg-blue-500 text-white hover:bg-blue-700',
      secondary: 'bg-gray-500 text-white hover:bg-gray-700',
      danger: 'bg-red-500 text-white hover:bg-red-700'
    };
    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return `${baseClass} ${typeClass[this.type]} ${disabledClass}`;
  }

  
}
