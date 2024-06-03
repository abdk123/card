import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  ISocialMediaItem,
  SOCIAL_ITEMS,
} from 'src/app/shared/data/social-media';
import { LinkModel } from 'src/app/shared/models/link.model';
import { update } from 'src/app/shared/state/link/link.action';
import { LinkState } from 'src/app/shared/state/link/link.state';

@Component({
  selector: 'app-social-media-button-list',
  templateUrl: './social-media-button-list.component.html',
  styleUrls: ['./social-media-button-list.component.css'],
})
export class SocialMediaButtonListComponent implements OnInit {
  socialMediaList: ISocialMediaItem[] = SOCIAL_ITEMS;

  constructor(
    private sanitizer: DomSanitizer, 
    public router: Router,
    private linkStore: Store<LinkState>) {}

  ngOnInit(): void {
    //this.dispatchLink();
  }

  dispatchLink() {
    this.linkStore.dispatch(
      update({
        links: Object.assign({}, [], {
          details: { closed: true },
        }),
      })
    );
  }
  
  getSvg(svg: string) {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  onChange(args: any) {
    console.log(args.target.value);
  }

  showAddSocialPage(item: ISocialMediaItem) {
    this.router.navigateByUrl(`/social/${item.name}`);
  }
}


