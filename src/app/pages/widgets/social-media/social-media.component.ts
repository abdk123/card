import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  ISocialMediaItem,
  SOCIAL_ITEMS,
} from 'src/app/shared/data/social-media';
import { LinkModel } from 'src/app/shared/models/link.model';
import { Observable } from 'rxjs';
import { LinkState } from 'src/app/shared/state/link/link.state';
import { Store } from '@ngrx/store';
import { ProfileModel } from 'src/app/shared/models/profile.model';
import { selectProfile } from 'src/app/shared/state/profile/selectors/app.selector';
import { WidgetModel } from 'src/app/shared/models/widget.model';
import { LinkService } from 'src/app/shared/services/link.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css'],
})
export class SocialMediaComponent implements OnInit {
  
  link: LinkModel = new LinkModel();
  socialMediaList: ISocialMediaItem[] = SOCIAL_ITEMS;
  socialMediaItem: ISocialMediaItem;
  color: string;
  constructor(
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    
    private linkService: LinkService,
    private location: Location) {}

  ngOnInit(): void {
    
    if (this.route.snapshot.params) {
      const name: string = this.route.snapshot.params['name'];
      if (name) {
        this.socialMediaItem = this.socialMediaList.find(
          (x) => x.name == name
        )!;
        //this.initialProfile();
      }
    }
  }
  

  getSvg() {
    return this.sanitizer.bypassSecurityTrustHtml(this.socialMediaItem.svg);
  }

  back(){
    this.location.back();
  }

  save(){
    this.link.name = this.socialMediaItem.name;
    this.link.svg = this.socialMediaItem.svg;
    this.link.color = this.socialMediaItem.color;
    this.linkService.build(this.link);
    this.location.back();
  }
}
