import { ISectionModel, SectionModel } from './section.model';
import { IStyleModel, StyleModel } from './style.model';

export interface IWidgetModel {
  id?: number;
  index: number;
  name: string;
  type: string; //carousel,header,card,contctInfo..etc
}

export class WidgetModel implements IWidgetModel {
  constructor(data?: IWidgetModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
  id?: number;
  index: number;
  name: string;
  type: string;
  children: WidgetModel[] = [];
  sections: SectionModel[] = [];
  styles: StyleModel[] = [];

  
  updateStyle(style:StyleModel){
    const itemIndex = this.styles.findIndex((x) => x.name == style.name);
    if(itemIndex > -1){
      this.styles.splice(itemIndex,1);
    }
    this.styles.push(style);
  }
  getClasses() {
    let classesNames = '';
    const items = this.styles.filter((x) => x.type == 'class');
    if (items) {
      items.forEach((item) => {
        classesNames += `${item.value} `;
      });
    }
    return classesNames;
  }
  getStyles() {
    let cssStyles = '';
    const items = this.styles.filter((x) => x.type == 'style');
    if (items) {
      items.forEach((item) => {
        cssStyles += `${item.name}:${item.value};`;
      });
    }
    return cssStyles;
  }
  getTags() {
    let tags = '';
    this.sections.forEach((section) => {
      tags += section.getTag();
    });
    return tags;
  }
}


