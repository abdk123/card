import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorderModel } from 'src/app/shared/models/common/border.model';

@Component({
  selector: 'app-bg-toolbar-border',
  templateUrl: './bg-toolbar-border.component.html',
  styleUrls: ['./bg-toolbar-border.component.css']
})
export class BgToolbarBorderComponent implements OnInit {

  @Input() border:BorderModel = new BorderModel();
  @Output() onChange=new EventEmitter<BorderModel>();
  
  ngOnInit(): void {
  }

  onChangeAll(value:string) {
    this.border.tlRedius = value;
    this.border.trRedius = value;
    this.border.blRedius = value;
    this.border.brRedius = value;
    this.onChange.emit(this.border);
  } 

  onChangeTl(value: string) {
    this.border.tlRedius = value;
    this.onChange.emit(this.border);
  }

  onChangeTr(value: string) {
    this.border.trRedius = value;
    this.onChange.emit(this.border);
  }

  onChangeBr(value: string) {
    this.border.brRedius = value;
    this.onChange.emit(this.border);
  }

  onChangeBl(value: string) {
    this.border.blRedius = value;
    this.onChange.emit(this.border);
  }
  onChangeColor(value: string) {
    this.border.color = value;
    this.onChange.emit(this.border);
  }

}
