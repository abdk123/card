import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  imgProfile = {
    'background-color': '#868d9b',
    'background': 'url("assets/images/profile.jpg")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center center',
  };
  
}
