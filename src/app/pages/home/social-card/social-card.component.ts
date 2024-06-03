import { Component } from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent {

  get cardClass(){
    const baseClass = 'flex justify-between items-center mt-4 shadow-lg rounded-xl';
    let classes = 'px-4 py-4 my-2'
    return `${baseClass} ${classes}`;
  }
  
}
