import { BorderModel } from "./common/border.model";
import { IShadow, ShadowModel } from "./common/shadow.model";

export interface IProfileImage{
    size:string;
    margin:string;
    top:string;
    imageUrl:string;
}

export class ProfileImageModel implements IProfileImage {
    constructor(data?: IProfileImage) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    margin: string;
    top: string;
    imageUrl:string;
    size:string = '140px';
    boxShadow:ShadowModel;
    border:BorderModel;
    toJson(){
        const url = this.imageUrl ? 'url(assets/images/profile.png)'.replace('assets/images/profile.png',this.imageUrl)
                                    :'url(assets/images/bg.png)';
        
        let margin = '0 calc(20% - ('+this.size+' /2))';
        var value = {
            'width': this.size,
            'height': this.size,
            'background': url,
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
            'margin': margin,
            'margin-top': this.top,
            ...this.boxShadow.toJson(),
            ...this.border.toJSON()
          };
          
          return value;

    }
}