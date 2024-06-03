export interface ILink{
    id?:number;
    userId?:number;
    name:string;
    url:string;
    title:string;
    countryCode:string;
    phoneNumber:string;
    svg:string;
    color:string;
}

export class LinkModel implements ILink {
    constructor(data?: ILink) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
    title: string;
    id?: number | undefined;
    userId?: number | undefined;
    name: string;
    url: string;
    countryCode: string;
    phoneNumber: string;
    svg:string;
    color:string;

    update(_title:string,_url:string){
        this.title = _title;
        this.url = _url;
    }
}