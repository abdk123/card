import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Store, select } from '@ngrx/store';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { Observable } from 'rxjs';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';
import { AppState } from 'src/app/shared/state/profile/app.state';
import {
  Modal,
  Ripple,
  initTWE,
} from "tw-elements";
import { UploadModel } from 'src/app/shared/models/common/upload.model';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.css'],
})
export class AppearanceComponent implements OnInit {
  profile$: Observable<ProfileModel> = this.store.select(selectProfile);
  profile: ProfileModel = new ProfileModel();

  constructor(
    private store: Store<AppState>,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    initTWE({ Modal, Ripple });
    this.profile$.subscribe((result) => {
      this.profile = result;
    });
  }

  saveBgImage(model: UploadModel) {
    if(model.type == 'bg'){
      this.profile.widgets
      .find((x) => x.name == 'header')
      ?.sections.find(x=>x.name == 'background')
      ?.updateStyle({ type: 'style', name: 'background-image', value: `url(${model.url})` });
    }
  }

  save(){
    console.log(JSON.stringify(this.profile));
  }
}
