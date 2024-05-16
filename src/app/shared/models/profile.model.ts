import { BackgroundModel, IBackground } from "./background.model";

export interface IProfile{
    primaryColor:string;
    secondryColor:string;
    primaryTextColor:string;
    secondryTextColor:string;
    forntType:string;
    forntSize:string;
}

export class ProfileModel implements IProfile {
    constructor(data?: IProfile) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    primaryColor: string;
    secondryColor: string;
    primaryTextColor: string;
    secondryTextColor: string;
    forntType: string;
    forntSize: string;
    background:BackgroundModel;

    
}