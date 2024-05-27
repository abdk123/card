import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  get cardClass(){
    const baseClass = 'flex justify-between items-center mt-4 shadow-lg rounded-xl';
    let classes = 'px-4 py-4 my-2'
    return `${baseClass} ${classes}`;
  }
  
}
