import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShadowModel } from 'src/app/shared/models/common/shadow.model';

@Component({
  selector: 'app-bg-toolbar-shadow',
  templateUrl: './bg-toolbar-shadow.component.html',
  styleUrls: ['./bg-toolbar-shadow.component.css']
})
export class BgToolbarShadowComponent implements OnInit {

  @Input() boxShadow:ShadowModel = new ShadowModel();
  @Output() onChange=new EventEmitter<ShadowModel>();
  ngOnInit(): void {
  }

  onChangeHorizontal(value:string) {
    this.boxShadow.horizontalOffset = value;
    this.onChange.emit(this.boxShadow);
    // this.profile.background.boxShadow.horizontalOffset = value;
    // this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    //   details: { closed: true }
    // })}));
  } 

  onChangeVertical(value: string) {
    this.boxShadow.verticalOffset = value;
    this.onChange.emit(this.boxShadow);
    // this.profile.background.boxShadow.verticalOffset = value;
    // this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    //   details: { closed: true }
    // })}));
  }

  onChangeBlur(value: string) {
    this.boxShadow.blurRadius = value;
    this.onChange.emit(this.boxShadow);
    // this.profile.background.boxShadow.blurRadius = value;
    // this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    //   details: { closed: true }
    // })}));
  }

  onChangeSpread(value: string) {
    this.boxShadow.spreadRadius = value;
    this.onChange.emit(this.boxShadow);
    // this.profile.background.boxShadow.spreadRadius = value;
    // this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    //   details: { closed: true }
    // })}));
  }

  onChangeColor(value: string) {
    this.boxShadow.color = value;
    this.onChange.emit(this.boxShadow);
    // this.profile.background.boxShadow.color = value;
    // this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    //   details: { closed: true }
    // })}));
  }

}
