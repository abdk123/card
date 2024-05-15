import { Component, OnInit } from '@angular/core';
import { BackgroundShadow } from 'src/app/shared/models/background-shadow.model';
import { Store } from '@ngrx/store';
import { update } from 'src/app/shared/state/profile/action/app.action';
import { AppState } from 'src/app/shared/state/profile/app.state';

@Component({
  selector: 'app-bg-toolbar',
  templateUrl: './bg-toolbar.component.html',
  styleUrls: ['./bg-toolbar.component.scss'],
})
export class BgToolbarComponent implements OnInit {
  colorShadow: string = '#e9ecef';
  shadowBox: BackgroundShadow = new BackgroundShadow();

  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    this.shadowBox.color = this.colorShadow;
    this.shadowBox.horizontalOffset = '0px';
    this.shadowBox.verticalOffset = '0px';
    this.shadowBox.blurRadius = '0px';
    this.shadowBox.spreadRadius = '0px';
    
    this.store.dispatch(update({shadow:Object.assign({}, this.shadowBox, {
      details: { closed: true }
    })}));
  }

  onChangeHorizontal(value:string) {
    this.shadowBox.horizontalOffset=value;
    this.store.dispatch(update({shadow:Object.assign({}, this.shadowBox, {
      details: { closed: true }
    })}));
  } 

  onChangeVertical(value: string) {
    this.shadowBox.verticalOffset = value;
    this.store.dispatch(update({shadow:Object.assign({}, this.shadowBox, {
      details: { closed: true }
    })}));
  }

  onChangeBlur(value: string) {
    this.shadowBox.blurRadius = value;
    this.store.dispatch(update({shadow:Object.assign({}, this.shadowBox, {
      details: { closed: true }
    })}));
  }

  onChangeSpread(value: string) {
    this.shadowBox.spreadRadius = value;
    this.store.dispatch(update({shadow:Object.assign({}, this.shadowBox, {
      details: { closed: true }
    })}));
  }
}
