import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackgroundModel } from 'src/app/shared/models/background.model';
import { BorderModel } from 'src/app/shared/models/common/border.model';
import { ShadowModel } from 'src/app/shared/models/common/shadow.model';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { update } from 'src/app/shared/state/profile/action/app.action';
import { AppState } from 'src/app/shared/state/profile/app.state';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';

@Component({
  selector: 'app-bg-toolbar',
  templateUrl: './bg-toolbar.component.html',
  styleUrls: ['./bg-toolbar.component.scss'],
})
export class BgToolbarComponent implements OnInit {
  profile$:Observable<ProfileModel> = this.store.select(selectProfile);
  profile:ProfileModel = new ProfileModel();
  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    this.profile$.subscribe((result)=>{
      console.log(result);
      this.profile = result;
    });
  }

  onChangeShadow(args:ShadowModel){
      this.profile.background.boxShadow = args;
    this.store.dispatch(update({profile:Object.assign({}, this.profile, {
      details: { closed: true }
    })}));
  }
  
  onChangeBorder(args:BorderModel){
    this.profile.background.border = args;
    console.log(args);
  this.store.dispatch(update({profile:Object.assign({}, this.profile, {
    details: { closed: true }
  })}));
}
  
}