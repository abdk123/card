import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import {
  Collapse,
  initTWE,
} from "tw-elements";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  device = 'pc';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;

  ngOnInit(): void {
    initTWE({ Collapse });
  }

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
