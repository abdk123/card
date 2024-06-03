export interface IShadow {
  horizontalOffset: string;
  verticalOffset: string;
  blurRadius: string;
  spreadRadius: string;
  color: string;
}

export class ShadowModel implements IShadow {
  constructor(data?: IShadow) {
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
  getValue() {
    return `${this.horizontalOffset} ${this.verticalOffset} ${this.blurRadius}  ${this.color}`;
  }

  toJson() {
    return {
      'box-shadow': `${this.horizontalOffset} ${this.verticalOffset} ${this.blurRadius}  ${this.color}`,
    };
  }
}
