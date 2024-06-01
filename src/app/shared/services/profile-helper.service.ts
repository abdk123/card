import { Injectable } from '@angular/core';
import { ProfileModel } from '../models/profile.model';
import { WidgetModel } from '../models/widget.model';
import { StyleModel } from '../models/style.model';
import { SectionModel } from '../models/section.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileHelperService {
  initial(userId: number): ProfileModel {
    var profile = new ProfileModel({ bio: '', title: '', userId });
    profile.widgets = this.initialWidgets();
    return profile;
  }

  initialWidgets(): WidgetModel[] {
    var widgets: WidgetModel[] = [];
    widgets.push(this.initialHeader());
    widgets.push(this.initialPersonalInfo());
    return widgets;
  }

  initialHeader(): WidgetModel {
    var header = new WidgetModel({ index: 0, name: 'header', type: 'header' });
    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'p-0'},
      {type:'class',name:'position',value:'relative'}
    ];
    header.styles = styles;
    // children
    header.sections = [];
    header.sections.push(this.initialBgSection());
    header.sections.push(this.initialImageSection());
    return header;
  }

  initialBgSection(): SectionModel {
    var bg = new SectionModel({ name: 'background', elementType: 'div' });
    var styles:StyleModel[] = [
      {type:'style',name:'background-image',value:'url(assets/images/bg.png)'},
      {type:'style',name:'background-size',value:'cover'},
      {type:'style',name:'background-repeat',value:'no-repeat'},
      {type:'style',name:'background-position',value:'center center'},
      {type:'class',name:'shadow',value:'shadow-lg'},
      {type:'class',name:'height',value:'h-[15rem]'}
    ];
    bg.styles = styles;
    return bg;
  }

  initialImageSection(): SectionModel {
    var bg = new SectionModel({ name: 'personalImage', elementType: 'div' });
    var styles:StyleModel[] = [
      {type:'style',name:'background-image',value:'url(assets/images/user.png)'},
      {type:'style',name:'background-size',value:'cover'},
      {type:'style',name:'background-repeat',value:'no-repeat'},
      {type:'style',name:'background-position',value:'center center'},
      {type:'class',name:'shadow',value:'shadow-xl'},
      {type:'class',name:'rounded',value:'rounded-full'},
      {type:'class',name:'height',value:'h-[5rem]'},
      {type:'class',name:'width',value:'w-[5rem]'},
      {type:'class',name:'margin',value:'mt-[-16%] ml-[10%]'},
      {type:'class',name:'border',value:'border-4'},

    ];
    bg.styles = styles;
    return bg;
  }

  //Personal Info
  initialPersonalInfo(): WidgetModel {
    var personalInfo = new WidgetModel({ index: 0, name: 'personalInfo', type: 'personalInfo' });
    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-3 py-2'},
      {type:'class',name:'display',value:'flex flex-col'},
      {type:'class',name:'align',value:'items-center'},
    ];
    personalInfo.styles = styles;
    // children
    personalInfo.sections = [];
    personalInfo.sections.push(this.initialBgSection());
    personalInfo.sections.push(this.initialImageSection());
    return personalInfo;
  }
}
