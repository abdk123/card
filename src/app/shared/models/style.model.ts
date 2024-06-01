export interface IStyleModel{
    id?:number;
    name?:string;
    value?:string;
    type:string;//style | class
}

export class StyleModel implements IStyleModel {
    constructor(data?: IStyleModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    id?:number;
    name?:string;
    value?:string;
    type:string;//style | class
}

