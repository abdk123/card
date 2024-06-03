import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  toggle = false;
  @Input() title: string;
  @Input() checked: boolean;
  @Output() onChange = new EventEmitter<boolean>();
  
  onToggle(args:any) {
    this.toggle = args.target.value;
  }
}
