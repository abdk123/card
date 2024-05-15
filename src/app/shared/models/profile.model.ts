import { IBackgroundShadow } from "./background-shadow.model";

export interface IPtofile{
    background:IBackgroundShadow;
}

export class Ptofile implements IPtofile {
    background: IBackgroundShadow;
    constructor(data?: IPtofile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    
}