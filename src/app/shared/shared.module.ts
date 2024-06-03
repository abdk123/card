import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './state/profile/reducer/app.reducer';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { SelectComponent } from './components/select/select.component';
import { UploadImageModalComponent } from './components/upload-image-modal/upload-image-modal.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import { RightModalComponent } from './components/right-modal/right-modal.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { GiantButtonComponent } from './components/giant-button/giant-button.component';
import { ModalHeaderComponent } from './components/modal/modal-header/modal-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalBodyComponent } from './components/modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal/modal-footer/modal-footer.component';
import { GradientComponent } from './components/gradient/gradient.component';
import { SlickComponent } from './components/slick/slick.component';
import { ShadowComponent } from './components/shadow/shadow.component';
import { BackgroundComponent } from './components/background/background.component';
import { ColorListComponent } from './components/color-list/color-list.component';

@NgModule({
  declarations: [
    SliderComponent,
    ColorPickerComponent,
    SelectComponent,
    UploadImageModalComponent,
    RightModalComponent,
    ToggleComponent,
    ButtonComponent,
    GiantButtonComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalComponent,
    GradientComponent,
    SlickComponent,
    ShadowComponent,
    BackgroundComponent,
    ColorListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    StoreModule.forRoot({ profile: profileReducer },{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    ImageCropperModule
  ],
  exports:[
    SliderComponent,
    ColorPickerComponent,
    SelectComponent,
    UploadImageModalComponent,
    ToggleComponent,
    ButtonComponent,
    GiantButtonComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalComponent,
    GradientComponent,
    SlickComponent,
    ShadowComponent,
    BackgroundComponent,
    ColorListComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
