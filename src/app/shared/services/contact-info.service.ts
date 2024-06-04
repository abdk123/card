import { Injectable } from '@angular/core';
import { ContactInfoModel } from '../models/contact.model';
import { ProfileModel } from '../models/profile.model';
import { Observable } from 'rxjs';
import { selectProfile } from '../state/profile/selectors/app.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../state/profile/app.state';
import { WidgetModel } from '../models/widget.model';
import { StyleModel } from '../models/style.model';
import { SectionModel } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  profile$: Observable<ProfileModel> = this.store.select(selectProfile);
  profile: ProfileModel = new ProfileModel();
  
  constructor(private store: Store<AppState>) { 
    this.profile$.subscribe((result) => {
      if(result){
        this.profile = result;
      }
    });
  }

  build(model:ContactInfoModel){
    let widget = this.profile.widgets.find(x=>x.type === 'contactInfo');
    if(!widget){
      this.profile.widgets.push(this.initial(model));
      this.profile.contactInfo = model;
    }
  }

  get(){
    return this.profile.contactInfo;
  }

  initial(model:ContactInfoModel):WidgetModel{
    var widget = new WidgetModel({
      name:'Contact Info',
      type:'contactInfo',
      index:4,
      enable:true
    });
    
    var styles:StyleModel[] = [
      {type:'class',name:'display',value:'grid grid-cols-2 justify-between mx-auto'},
      {type:'class',name:'padding',value:'px-2 py-3'},
      {type:'class',name:'gep',value:'gap-4'},
      {type:'class',name:'margin',value:'mx-2 my-2'}

    ];
    widget.styles = styles;
    widget.sections.push(this.initialCard('Email',model.email,'email','mail'));
    widget.sections.push(this.initialCard('Phone Number',model.phoneNumber,'phoneNumber','call'));
    widget.sections.push(this.initialCard('Date of birth',model.dateOfBirth,'email','cake'));
    widget.sections.push(this.initialCard('Location',model.email,'email','location_on'));
    return widget;
  }

  initialCard(title: string,value:string,name: string,icon:string): SectionModel {
    var section = new SectionModel({
      elementType:'div',
      name:name
    });

    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-2 py-2'},
      {type:'class',name:'display',value:'flex justify-center gap-3'},
      {type:'class',name:'align',value:'items-center'},
      {type:'class',name:'margin',value:'mx-auto'},
      {type:'class',name:'background',value:'bg-slate-300'},
      {type:'class',name:'rounded',value:'rounded-xl'},
      {type:'class',name:'border',value:'border'},
      {type:'class',name:'width',value:'w-[100%]'},
      {type:'class',name:'shadow',value:'shadow-lg'},
    ];
    section.styles = styles;
    section.children.push(this.initialIcon(name,icon));
    section.children.push(this.initialContent(title,value,name));
    return section;
  }

  initialIcon(name: string, icon: string): SectionModel {
    var section = new SectionModel({
      elementType:'span',
      name:`${name}-icon`,
      content:icon
    });

    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-2 py-2'},
      {type:'class',name:'align',value:'items-center'},
      {type:'class',name:'margin',value:'mx-auto'},
      {type:'class',name:'color',value:'text-gray-600'},
      {type:'class',name:'width',value:'w-1/4'},
      {type:'class',name:'icon',value:'material-icons-outlined'}
    ];
    section.styles = styles;
    return section;
  }

  initialContent(title: string, value: string,name: string): SectionModel {
    var section = new SectionModel({
      elementType:'div',
      name:`${name}-content`
    });

    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-1 py-1'},
      {type:'class',name:'align',value:'self-start'},
      {type:'class',name:'width',value:'w-3/4'},
      
      {type:'class',name:'display',value:'flex flex-col justify-start'}
    ];
    section.styles = styles;
    section.children.push(this.initialTitle(title,name));
    section.children.push(this.initialValue(value,name));
    return section;
  }

  initialTitle(title: string, name: string): SectionModel {
    var section = new SectionModel({
      elementType:'div',
      name:`${name}-title`,
      content:title
    });

    var styles:StyleModel[] = [
      {type:'class',name:'color',value:'text-gray-400'},
      {type:'class',name:'font-size',value:'text-sm'},
    ];
    section.styles = styles;
    return section;
  }

  initialValue(value: string, name: string): SectionModel {
    var section = new SectionModel({
      elementType:'div',
      name:`${name}-value`,
      content:value
    });

    var styles:StyleModel[] = [
      {type:'class',name:'color',value:'text-gray-600'},
      {type:'class',name:'font-size',value:'text-bd'},
    ];
    section.styles = styles;
    return section;
  }
}