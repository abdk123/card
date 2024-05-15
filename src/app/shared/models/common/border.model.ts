export interface IBorder{
    horizontalOffset: string;
    verticalOffset: string;
    blurRadius: string;
    spreadRadius: string;
    color: string;
}

export class BorderModel implements IBorder {
    constructor(data?: IBorder) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
    horizontalOffset: string;
    verticalOffset: string;
    blurRadius: string;
    spreadRadius: string;
    color: string;
  }
  