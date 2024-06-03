import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveViewComponent } from './live-view/live-view.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BgToolbarComponent } from './tools/bg-toolbar/bg-toolbar.component';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './shared/state/profile/reducer/app.reducer';
import { BgToolbarShadowComponent } from './tools/bg-toolbar/bg-toolbar-shadow/bg-toolbar-shadow.component';
import { BgToolbarBorderComponent } from './tools/bg-toolbar/bg-toolbar-border/bg-toolbar-border.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BgToolbarGeneralComponent } from './tools/bg-toolbar/bg-toolbar-general/bg-toolbar-general.component';
import { ToolbarComponent } from './tools/toolbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LiveViewMobileComponent } from './live-view/live-view-mobile/live-view-mobile.component';
import { LiveViewPcComponent } from './live-view/live-view-pc/live-view-pc.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppearanceComponent } from './pages/appearance/appearance.component';
import { HomeCardComponent } from './pages/home/home-card/home-card.component';
import { ModalService } from './shared/services/modal.service';
import { ProfileComponent } from './pages/appearance/profile/profile.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { OurServiceComponent } from './pages/widgets/our-service/our-service.component';
import { OurProductComponent } from './pages/widgets/our-product/our-product.component';
import { GalleryComponent } from './pages/widgets/gallery/gallery.component';
import { ThemeComponent } from './pages/appearance/theme/theme.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfileHelperService } from './shared/services/profile-helper.service';
import { FormsModule } from '@angular/forms';
import { PersonalInfoComponent } from './pages/appearance/personal-info/personal-info.component';
import { SocialMediaButtonListComponent } from './pages/home/social-media-button-list/social-media-button-list.component';

const BootstrapModules = [
  ModalModule.forRoot(),
  AccordionModule.forRoot(),
  TabsModule.forRoot(),
  BsDropdownModule.forRoot(),
];

const NebularModules = [
  NbThemeModule.forRoot(),
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbEvaIconsModule,
  NbUserModule,
  NbCardModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LiveViewComponent,
    BgToolbarComponent,
    BgToolbarShadowComponent,
    BgToolbarBorderComponent,
    BgToolbarGeneralComponent,
    ToolbarComponent,
    LiveViewMobileComponent,
    LiveViewPcComponent,
    NavbarComponent,
    HomeComponent,
    AppearanceComponent,
    HomeCardComponent,
    ProfileComponent,
    SidebarComponent,
    OurServiceComponent,
    OurProductComponent,
    GalleryComponent,
    ThemeComponent,
    PersonalInfoComponent,
    SocialMediaButtonListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SlickCarouselModule,
    StoreModule.forRoot(
      { profile: profileReducer },
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false,
          strictStateSerializability: false,
          strictActionSerializability: false,
        },
      }
    ),
    ...BootstrapModules,
    ...NebularModules,
  ],
  providers: [ModalService,ProfileHelperService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
