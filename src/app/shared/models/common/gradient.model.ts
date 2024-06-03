export interface IGradient {
    from: string;
    to: string;
    direction: string;
    type:string;//bg | text
  }
  
  export class GradientModel implements IGradient {
    constructor(data?: IGradient) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }
    type: string;
      from: string;
      to: string;
      direction: string;
    
    getValue() {
      var prefix = 'linear';
      return `${prefix}-gradient(${this.direction}, ${this.from} , ${this.to})`;
    }
  }
  