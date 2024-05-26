import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent {
  device:string = 'pc';
  
  get cardClass(){
    const baseClass = 'flex justify-between items-center mt-4 shadow-lg rounded-xl';
    let classes = 'px-4 py-4 my-2'
    if(this.device == 'mobile'){
      classes = 'px-4 py-7'
    }
    return `${baseClass} ${classes}`;
  }
}
