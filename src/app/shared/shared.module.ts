import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { shadowReducer } from './state/profile/reducer/app.reducer';


@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({shadow:shadowReducer}),
  ],
  exports:[
    SliderComponent
  ]
})
export class SharedModule { }
