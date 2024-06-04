import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ContactInfoModel } from 'src/app/shared/models/contact.model';
import { ContactInfoService } from 'src/app/shared/services/contact-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactInfo:ContactInfoModel = new ContactInfoModel();

  constructor(
    private sanitizer: DomSanitizer, 
    private route: ActivatedRoute,
    private contactInfoService: ContactInfoService,
    private location: Location) {}
    
  ngOnInit(): void {
    this.contactInfo = this.contactInfoService.get();
  }

  save(){
    this.contactInfoService.build(this.contactInfo);
    //this.location.back();
  }

  back(){
    this.location.back();
  }
}
