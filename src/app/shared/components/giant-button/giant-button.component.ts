import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-giant-button',
  templateUrl: './giant-button.component.html',
  styleUrls: ['./giant-button.component.css']
})
export class GiantButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'danger' | 'outline-primary' | 'outline-secondary' | 'outline-danger' = 'primary';
  @Input() disabled = false;
  @Input() rounded:string='rounded-lg';
  @Input() icon:string;

}
