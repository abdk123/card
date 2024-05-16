import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProfileModel } from './shared/models/profile.model';
import { ShadowModel } from './shared/models/common/shadow.model';
import { BackgroundModel } from './shared/models/background.model';
import { AppState } from './shared/state/profile/app.state';
import { Store } from '@ngrx/store';
import { update } from './shared/state/profile/action/app.action';
import { BorderModel } from './shared/models/common/border.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile:ProfileModel = new ProfileModel();
  title = 'ocucard-app';
  modalRef?: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  constructor(private modalService: BsModalService,private store:Store<AppState>) {}
  ngOnInit(): void {
    this.profile = this.initialProfile();
    this.store.dispatch(update({profile:Object.assign({}, this.profile, {
      details: { closed: true }
    })}));
  }
 
  openModal() {
    this.modalRef = this.modalService.show(this.template,this.config);
  }
  
  //=========
  initialProfile(): ProfileModel {
    //Get from database by id
    //=======================
    var profile = new ProfileModel();
    // initial profile
    profile.background = this.initialBackground();
    return profile;
  }
  
   initialBackground(): BackgroundModel {
    let background = new BackgroundModel();
    background.padding = '0rem';
    background.marging = '0rem';
    background.boxShadow = this.initialBackgroundShadow();
    background.border = this.initialBackgroundBorder();
    
    return background;
  }
  
  
   initialBackgroundShadow(): ShadowModel {
    return new ShadowModel({
      color: '#7a8590',
      horizontalOffset: '0px',
      verticalOffset: '0px',
      blurRadius: '0px',
      spreadRadius: '0px',
    });
  }

  initialBackgroundBorder(): BorderModel {
    return new BorderModel({
      tlRedius:'0px',
      trRedius:'0px',
      blRedius:'0px',
      brRedius:'0px',
      size:'0px',
      color:'#7a8590',
      style:'solid'
    });
  }
}
