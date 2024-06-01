import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { WidgetModel } from 'src/app/shared/models/widget.model';
import { AppState } from 'src/app/shared/state/profile/app.state';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';

@Component({
  selector: 'app-live-view-mobile',
  templateUrl: './live-view-mobile.component.html',
  styleUrls: ['./live-view-mobile.component.css']
})
export class LiveViewMobileComponent implements OnInit  {
  profile:Observable<ProfileModel> = this.store.pipe(select(selectProfile));

  constructor(
    private store:Store<AppState>,
    private sanitizer: DomSanitizer
  ){

  }
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

  ngOnInit(): void {
    this.initialProfile();
  }

  header:WidgetModel = new WidgetModel();
  initialProfile() {
    this.profile.subscribe((result)=>{
      
      this.initialHeader()
      const headerWidget = result.widgets.find(x=>x.index == 0);
      if(headerWidget){
        this.header = headerWidget;
      }
      // this.bgStyle = {
      //   'padding':result.background.spacing
      // }
      // this.bgImageStyle= result.background.toJson();
    })
  }

  initialHeader(){
    return this.sanitizer.bypassSecurityTrustHtml(this.header.getTags());
  }
}
