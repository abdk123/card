import { NgModule } from '@angular/core';
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

const BootstrapModuls = [ModalModule.forRoot()];

@NgModule({
  declarations: [AppComponent, LiveViewComponent, BgToolbarComponent, BgToolbarShadowComponent, BgToolbarBorderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ profile: profileReducer },
    {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    ...BootstrapModuls,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
