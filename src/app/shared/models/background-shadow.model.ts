export interface IBackgroundShadow{
    horizontalOffset?: number;
    verticalOffset?: number;
    blurRadius?: number;
    spreadRadius?: number;
    color?: string;
}
export class BackgroundShadow implements IBackgroundShadow {
    constructor(data?: IBackgroundShadow) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }
}
