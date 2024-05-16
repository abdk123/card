export interface IBorder{
    tlRedius: string;
    trRedius: string;
    blRedius: string;
    brRedius: string;
    size: string;
    color: string;
    style: string;
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
    tlRedius: string;
    trRedius: string;
    blRedius: string;
    brRedius: string;
    size: string;
    color: string;
    style: string;

    toJSON() {
      return {
        'border-radius':`${this.tlRedius} ${this.trRedius} ${this.brRedius} ${this.blRedius}`,
        'border':`${this.size} ${this.style} ${this.color}`,
      }
  }
  }
  