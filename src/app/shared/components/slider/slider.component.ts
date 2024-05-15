import { Component, Input, OnInit , TemplateRef, ViewChild  } from '@angular/core';
import { ShadowInput } from '../../models/shadow-input';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls:['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  shadowInput:ShadowInput = new ShadowInput();
  @ViewChild('inputTemplate', { static: true }) template: TemplateRef<any>;
  @Input() title:string='';
  @Input() min: number = 0;
  @Input() max: number = 50;
  @Input() value: number = 50;
  @Input() unit: string = 'px';

  
  ngOnInit() {
    
  }
}
