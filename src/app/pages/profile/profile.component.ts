import { Component, OnInit } from '@angular/core';
import {
  Carousel,
  initTWE,
} from "tw-elements";
initTWE({ Carousel });

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    initTWE({ Carousel });
  }

}
