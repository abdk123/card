import { Injectable } from '@angular/core';
import { LinkModel } from '../models/link.model';
import { WidgetModel } from '../models/widget.model';
import { StyleModel } from '../models/style.model';
import { SectionModel } from '../models/section.model';
import { ISocialMediaItem, SOCIAL_ITEMS } from '../data/social-media';
import { ProfileModel } from '../models/profile.model';
import { Observable } from 'rxjs';
import { AppState } from '../state/profile/app.state';
import { Store } from '@ngrx/store';
import { selectProfile } from '../state/profile/selectors/app.selector';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  profile$: Observable<ProfileModel> = this.store.select(selectProfile);
  profile: ProfileModel = new ProfileModel();
  socialMediaItems: ISocialMediaItem[] = SOCIAL_ITEMS;
  constructor(private store: Store<AppState>) { 
    this.profile$.subscribe((result) => {
      if(result){
        this.profile = result;
      }
    });
  }

  build(model:LinkModel){
    let widget = this.profile.widgets.find(x=>x.type === 'socialMedia');
    if(!widget){
      this.profile.widgets.push(this.initial(model));
      
    }else{
      let linkWidget = widget.sections.find(x=>x.name == model.name);
      if(!linkWidget){
        widget.sections.push(this.initialLinkSection(model))
      }
    }

    this.addOrUpdateLink(model);
  }

  addOrUpdateLink(model: LinkModel) {
    const index = this.profile.links.findIndex(x=>x.name == model.name);
    if(index > -1){
      this.profile.links.find(x=>x.name == model.name)?.update(model.title,model.url);
    }else{
      this.profile.links.push(model);
    }
  }

  getLinkByName(name: string){
    return this.profile.links.find(x=>x.name === name);
  }

  initial(model:LinkModel):WidgetModel{
    var widget = new WidgetModel({
      name:'Social Media',
      type:'socialMedia',
      index:3,
      enable:true
    });
    
    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-4 py-3'},
      {type:'class',name:'margin',value:'mx-3 my-2'},
      {type:'class',name:'display',value:'flex flex-wrap justify-evenly'},
      {type:'class',name:'gap',value:'gap-2'},
    ];
    widget.styles = styles;
    widget.sections.push(this.initialLinkSection(model))
    return widget;
  }

  initialLinkSection(model: LinkModel): SectionModel {
    var section = new SectionModel({
      elementType:'a',
      name:model.name,
      content:model.svg
    });

    var styles:StyleModel[] = [
      {type:'class',name:'padding',value:'px-2 py-2'},
      {type:'class',name:'display',value:'flex justify-center'},
      {type:'class',name:'align',value:'items-center'},
      {type:'class',name:'margin',value:'mx-auto'},
      {type:'class',name:'background',value:model.color},
      {type:'class',name:'rounded',value:'rounded-full'},
    ];
    section.styles = styles;
    section.children.push(this.initialSvgSection(model))
    return section;
  }

  initialSvgSection(model: LinkModel): SectionModel {
    var section = new SectionModel({
      elementType:'span',
      name:'svg',
      content:model.svg
    });

    var styles:StyleModel[] = [
      {type:'class',name:'background',value:'[&>svg]:fill-[#fff]'},
      {type:'class',name:'width',value:'[&>svg]:w-6'},
      {type:'class',name:'height',value:'[&>svg]:h-6'},
    ];
    section.styles = styles;
    return section;
  }
}
