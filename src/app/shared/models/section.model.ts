import { IStyleModel, StyleModel } from './style.model';

export interface ISectionModel {
  id?: number;
  name: string;
  content?:string;
  elementType: string; //div,span,text,button .. etc
}

export class SectionModel implements ISectionModel {
  constructor(data?: ISectionModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
  id?: number;
  elementType: string;
  name: string;
  content?:string;
  children: SectionModel[] = [];
  styles: StyleModel[];
  updateContent(text:string){
    this.content = text;
  }
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

  getTag() {
    const cssStyles = this.getStyles() ? `style="${this.getStyles()}"` : '';
    const cssClasses = this.getClasses() ? `class="${this.getClasses()}"` : '';
    const text = this.content ? this.content : '';
    let childrenHtml = '';
    this.children.forEach(child=>{
      childrenHtml += child.getTag();
    })
    return `<${this.elementType} ${cssClasses} ${cssStyles}>${text}${childrenHtml}</${this.elementType}>`;
  }
}

