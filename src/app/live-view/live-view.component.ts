import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/state/profile/app.state';
import { Observable } from 'rxjs';
import { ProfileModel } from '../shared/models/profile.model';
import { selectProfile } from '../shared/state/profile/selectors/app.selector';
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";

@Component({
  selector: 'app-live-view',
  templateUrl: './live-view.component.html',
  styleUrls: ['./live-view.component.css'],
})
export class LiveViewComponent implements OnInit {
  device='mobile';
  profile:Observable<ProfileModel> = this.store.pipe(select(selectProfile));
  imgProfile = {
    'width': '140px',
    'height': '140px',
    'background-color': '#868d9b',
    'background': 'url("https://source.unsplash.com/7Sz71zuuW4k")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
    'border': '2px solid #ffffff',
    'border-radius': '50%',
    'margin': '0 calc(20% - (140px /2))',
    'margin-top': '-75px',
  };

  bgStyle = {};
  bgImageStyle:{};
  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    initTWE({ Collapse, Ripple });
    this.initialProfileHeader();
  }

  initialProfileHeader() {
    this.profile.subscribe((result)=>{
      // this.bgStyle = {
      //   'padding':result.background.spacing
      // }
      // this.bgImageStyle= result.background.toJson();
    })
  }
}
