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



@NgModule({
  declarations: [
    SliderComponent,
    ColorPickerComponent,
    SelectComponent,
    UploadImageModalComponent,
    RightModalComponent,
    ToggleComponent,
    ButtonComponent,
    GiantButtonComponent
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
    GiantButtonComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
