import { LinkModel } from "./link.model";
import { WidgetModel } from "./widget.model";

export interface IProfile{
    id?:number;
    userId:number;
    title:string;
    bio:string;
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
    id?: number;
    userId:number;
    title: string;
    bio: string;
    widgets:WidgetModel[] = [];
    links:LinkModel[] = []
}