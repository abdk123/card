import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/state/profile/app.state';
import { Observable } from 'rxjs';
import { ProfileModel } from '../shared/models/profile.model';
import { selectProfile } from '../shared/state/profile/selectors/app.selector';

@Component({
  selector: 'app-live-view',
  templateUrl: './live-view.component.html',
  styleUrls: ['./live-view.component.css'],
})
export class LiveViewComponent implements OnInit {
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
  bg = {
    style: {
      'background': 'url(assets/images/bg.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
      'height': '20rem',
      'border-radius': '10rem 1rem',
      'box-shadow':'0px 0px 0px 0px'
    }
  };

  style:{};
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    this.initialProfileHeader();
  }

  initialProfileHeader() {
    this.profile.subscribe((result)=>{
      const val = `${result.background.boxShadow.horizontalOffset} ${result.background.boxShadow.verticalOffset} ${result.background.boxShadow.blurRadius}  ${result.background.boxShadow.color}`;
      console.log(val);
      this.style= {
        'background': 'url(assets/images/bg.jpg)',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center',
        'height': '20rem',
        'border-radius': '10rem 1rem',
        'box-shadow':val
      };
    })
  }
}
