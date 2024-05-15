import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-view',
  templateUrl: './live-view.component.html',
  styleUrls: ['./live-view.component.css'],
})
export class LiveViewComponent implements OnInit {
  imgProfile = {
    'width': '140px',
    'height': '140px',
    'background-color': '#868d9b',
    'background': 'url("https://source.unsplash.com/7Sz71zuuW4k")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center',
    'border': '2px solid #ffffff',
    'border-radius': '50%',
    'margin': '0 calc(20% - (140px /2))',
    'margin-top': '-75px',
  };
  bg = {
    style: {
      'background': 'url(assets/images/bg.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': 'center',
      'height': '20rem',
      'border-radius': '10rem 1rem',
    },
    class: 'shadow-lg',
  };

  ngOnInit(): void {
    this.initialProfileHeader();
  }

  initialProfileHeader() {}
}
