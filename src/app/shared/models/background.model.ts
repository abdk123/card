import { BorderModel } from "./common/border.model";
import { IShadow, ShadowModel } from "./common/shadow.model";

export interface IBackground{
    padding:string;
    marging:string;
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
    padding:string;
    height:string;
    marging:string;
    boxShadow:ShadowModel;
    border:BorderModel;
    toJson(){
        return {
            'background': 'url(http://localhost:21021/categories/bg1.png)',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center',
            'height': '20rem',
            ...this.boxShadow.toJson(),
            ...this.border.toJSON()
          };

    }
}