import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  styleUrls: ['./live-view-mobile.component.css'],
})
export class LiveViewMobileComponent implements OnInit,AfterContentChecked {
  profile$: Observable<ProfileModel> = this.store.pipe(select(selectProfile));

  constructor(
    private store: Store<AppState>,
    private sanitizer: DomSanitizer,
    private changeRef: ChangeDetectorRef
  ) {}
  ngAfterContentChecked(): void {
    this.changeRef.detectChanges();
  }

  imgProfile = {
    width: '140px',
    height: '140px',
    'background-color': '#868d9b',
    background: 'url("https://source.unsplash.com/7Sz71zuuW4k")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
    border: '2px solid #ffffff',
    'border-radius': '50%',
    margin: '0 calc(20% - (140px /2))',
    'margin-top': '-75px',
  };

  bgStyle = {};
  bgImageStyle: {};

  ngOnInit(): void {
    this.initialProfile();
    this.initialHeader();
    this.initialPersonalInfo();
    this.initialLinks();
  }
  profile: ProfileModel = new ProfileModel();
  header: WidgetModel = new WidgetModel();
  personalInfo: WidgetModel = new WidgetModel();
  links: WidgetModel = new WidgetModel();
  contactInfo: WidgetModel = new WidgetModel();

  initialProfile() {
    this.profile$.subscribe((result) => {
      this.profile = result;

      const headerWidget = result.widgets.find((x) => x.index == 0);
      if (headerWidget) {
        this.header = headerWidget;
      }
      const personalInfoWidget = result.widgets.find(
        (x) => x.type == 'personalInfo'
      );
      if (personalInfoWidget) {
        this.personalInfo = personalInfoWidget;
      }

      const contactInfoWidget = this.profile.widgets.find(
        (x) => x.type == 'contactInfo'
      );
      if (contactInfoWidget) {
        this.contactInfo = contactInfoWidget;
      }
    });
  }

  initialHeader() {
    return this.sanitizer.bypassSecurityTrustHtml(this.header.getTags());
  }

  initialPersonalInfo() {
    return this.sanitizer.bypassSecurityTrustHtml(this.personalInfo.getTags());
  }

  initialLinks() {
    var html = '';
    const linksWidget = this.profile.widgets.find(
      (x) => x.type == 'socialMedia'
    );
    if (linksWidget) {
      html = linksWidget.getTags();
      this.links = linksWidget;
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  initialContactInfo() {
    var html = '';
    const contactInfoWidget = this.profile.widgets.find(
      (x) => x.type == 'contactInfo'
    );
    if (contactInfoWidget) {
      html = contactInfoWidget.getTags();
      this.contactInfo = contactInfoWidget;
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  initialGallery(){
    const html = `<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">  <div class="-m-1 flex flex-wrap md:-m-2">    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />      </div>    </div>    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />      </div>    </div>    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />      </div>    </div>    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />      </div>    </div>    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />      </div>    </div>    <div class="flex w-1/3 flex-wrap">      <div class="w-full p-1 md:p-2">        <img          alt="gallery"          class="block h-full w-full rounded-lg object-cover object-center"          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />      </div>    </div>  </div></div>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
