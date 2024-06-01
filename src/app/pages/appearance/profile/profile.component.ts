import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UploadModel } from 'src/app/shared/models/common/upload.model';
import { Store, select } from '@ngrx/store';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { Observable } from 'rxjs';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';
import { AppState } from 'src/app/shared/state/profile/app.state';
import { WidgetModel } from 'src/app/shared/models/widget.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Output() onUpload = new EventEmitter<UploadModel>();
  profile$: Observable<ProfileModel> = this.store.select(selectProfile);
  profile: ProfileModel = new ProfileModel();
  type: string;
  backgroundStyle: string = '';
  profileStyle: string = '';
  personalInfoStyle: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.profile$.subscribe((result) => {
      this.profile = result;
      //Header
      const header = this.profile.widgets.find((x) => x.name == 'header');
      if(header){
        this.initialPersonalImage(header);
        this.initialBgImage(header);
        this.initialPersonalInfo(header);
      }
      
    });
  }

  upload(model: UploadModel) {
    if (this.type == 'bg') {
      this.saveBgImage(model.url);
    } else {
      this.savePersonalImage(model.url);
    }
    this.onUpload.emit(model);
  }

  updateType(value: string) {
    this.type = value;
  }

  saveBgImage(url: string) {
    this.profile.widgets
      .find((x) => x.name == 'header')
      ?.sections.find((x) => x.name == 'background')
      ?.updateStyle({
        type: 'style',
        name: 'background-image',
        value: `url(${url})`,
      });

    
  }

  savePersonalImage(url: string) {
    this.profile.widgets
      .find((x) => x.name == 'header')
      ?.sections.find((x) => x.name == 'personalImage')
      ?.updateStyle({
        type: 'style',
        name: 'background-image',
        value: `url(${url})`,
      });

    
  }

  initialBgImage(header:WidgetModel) {
    const bgSection = header.sections.find((x) => x.name == 'background');
      this.backgroundStyle = bgSection ? bgSection.getStyles() : '';
  }

  initialPersonalImage(header:WidgetModel) {
    const bgSection = header.sections.find((x) => x.name == 'personalImage');
    this.profileStyle = bgSection ? bgSection.getStyles() : '';
  }

  initialPersonalInfo(header:WidgetModel){
    const bgSection = header.sections.find((x) => x.name == 'personalInfo');
      this.profileStyle = bgSection ? bgSection.getStyles() : '';
  }
}
