import { BorderModel } from "./common/border.model";
import { IShadow, ShadowModel } from "./common/shadow.model";

export interface IBackground{
    spacing:string;
    height:string;
    imageUrl:string;
}

export class BackgroundModel implements IBackground {
    constructor(data?: IBackground) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    imageUrl:string;
    spacing:string = '0px';
    height:string;
    boxShadow:ShadowModel;
    border:BorderModel;
    toJson(){
        const url = this.imageUrl ? 'url(assets/images/bg.png)'.replace('assets/images/bg.png',this.imageUrl)
                                    :'url(assets/images/bg.png)';
        
        var value = {
            'background': url,
            'background-repeat': 'no-repeat',
            'background-size': 'cover' ,
            'background-position': 'center',
            //'background-attachment': 'fixed',
            'height': this.height,
            'marging':'2rem',   
            ...this.boxShadow.toJson(),
            ...this.border.toJSON()
          };
          
          return value;

    }
}