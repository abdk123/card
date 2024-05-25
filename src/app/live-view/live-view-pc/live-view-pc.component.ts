import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { AppState } from 'src/app/shared/state/profile/app.state';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';

@Component({
  selector: 'app-live-view-pc',
  templateUrl: './live-view-pc.component.html',
  styleUrls: ['./live-view-pc.component.css']
})
export class LiveViewPcComponent {
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
  select(){
    alert();
  }

  bgStyle = {};
  bgImageStyle:{};
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
    this.initialProfileHeader();
  }

  initialProfileHeader() {
    this.profile.subscribe((result)=>{
      this.bgStyle = {
        'padding':result.background.spacing
      }
      this.bgImageStyle= result.background.toJson();
    })
  }
}
