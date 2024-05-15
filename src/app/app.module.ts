import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveViewComponent } from './live-view/live-view.component';
import { SharedModule } from './shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BgToolbarComponent } from './tools/bg-toolbar/bg-toolbar.component';

const BootstrapModuls=[
  ModalModule.forRoot()
]

@NgModule({
  declarations: [
    AppComponent,
    LiveViewComponent,
    BgToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ...BootstrapModuls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
