import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './state/profile/reducer/app.reducer';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';


@NgModule({
  declarations: [
    SliderComponent,
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ profile: profileReducer },{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
  ],
  exports:[
    SliderComponent,
    ColorPickerComponent
  ]
})
export class SharedModule { }
