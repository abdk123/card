import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShadowModel } from '../../models/common/shadow.model';
import { StyleModel } from '../../models/style.model';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css'],
})
export class ShadowComponent implements OnInit {
  selectedShadow: string;
  shadows=["shadow-sm","shadow","shadow-lg","shadow-xl","shadow-2xl"]
  model:ShadowModel = new ShadowModel();
  @Output() onChange=new EventEmitter<StyleModel>();
  
  ngOnInit(): void {
    this.model = new ShadowModel({horizontalOffset:'0px',verticalOffset:'0px',blurRadius:'0px',color:'#e5e7eb',spreadRadius:''})
  }

  onSelect(value: string) {
    this.selectedShadow = value;
    const shadow = new StyleModel({type:'class',name:'box-shadow',value: value});
    this.onChange.emit(shadow);
  }

  onChangeHorizontal(value:string) {
    this.selectedShadow = '';
    this.model.horizontalOffset = value;
    this.onChange.emit(this.getStyle());
  } 

  onChangeVertical(value: string) {
    this.selectedShadow = '';
    this.model.verticalOffset = value;
    this.onChange.emit(this.getStyle());
  }

  onChangeBlur(value: string) {
    this.selectedShadow = '';
    this.model.blurRadius = value;
    this.onChange.emit(this.getStyle());
  }

  onChangeSpread(value: string) {
    this.selectedShadow = '';
    this.model.spreadRadius = value;
    this.onChange.emit(this.getStyle());
  }

  onChangeColor(value: string) {
    this.model.color = value;
    this.onChange.emit(this.getStyle());
  }
  getStyle(){
    return new StyleModel({type:'style',name:'box-shadow',value: this.model.getValue()});
  }
}
