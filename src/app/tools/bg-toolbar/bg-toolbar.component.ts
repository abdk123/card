import { Component } from '@angular/core';

@Component({
  selector: 'app-bg-toolbar',
  templateUrl: './bg-toolbar.component.html',
  styleUrls: ['./bg-toolbar.component.scss'],
})
export class BgToolbarComponent {
  hoShadow: number = 0;
  voShadow: number = 0;
  blurShadow: number = 0;
  spreadShadow: number = 0;
  colorShadow: string = '#e9ecef';
}
