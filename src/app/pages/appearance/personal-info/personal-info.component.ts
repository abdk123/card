import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { Observable } from 'rxjs';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';
import { AppState } from 'src/app/shared/state/profile/app.state';
import { WidgetModel } from 'src/app/shared/models/widget.model';
import {
  Collapse,
  Ripple,
  Tab,
  initTWE,
} from "tw-elements";
import { StyleModel } from 'src/app/shared/models/style.model';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit{

  profile$: Observable<ProfileModel> = this.store.select(selectProfile);
  profile: ProfileModel = new ProfileModel();
  fullName: string | undefined = '';
  jobTitle: string | undefined = '';
  bio: string | undefined = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    initTWE({ Ripple, Collapse, Tab });
    this.profile$.subscribe((result) => {
      this.profile = result;
      //Header

      const personalInfo = result.widgets.find((x) => x.type == 'personalInfo');
      if (personalInfo) {
        this.initialPersonalInfo(personalInfo);
      }
    });
  }

  initialPersonalInfo(header: WidgetModel) {
    this.fullName = header.sections.find((x) => x.name === 'fullName')?.content;
    this.jobTitle = header.sections.find((x) => x.name === 'jobTitle')?.content;
    this.bio = header.sections.find((x) => x.name === 'bio')?.content;
  }
  
  onChangeFullName(args:any){
    if(this.fullName){
      this.profile.widgets
      .find((x) => x.name == 'personalInfo')
      ?.sections.find((x) => x.name == 'fullName')
      ?.updateContent(this.fullName);
    }
  }

  onChangeJobTitle(args:any){
    if(this.jobTitle){
      this.profile.widgets
      .find((x) => x.name == 'personalInfo')
      ?.sections.find((x) => x.name == 'jobTitle')
      ?.updateContent(this.jobTitle);
    }
  }

  onChangeBio(args:any){
    if(this.bio){
      this.profile.widgets
      .find((x) => x.name == 'personalInfo')
      ?.sections.find((x) => x.name == 'bio')
      ?.updateContent(this.bio);
    }
  }
  
  onChangeStyle(style:StyleModel){
    console.log(style);
    this.profile.widgets
      .find((x) => x.name == 'personalInfo')
      ?.updateStyle(style);
  }

}
