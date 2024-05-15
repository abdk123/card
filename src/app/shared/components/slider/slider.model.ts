export interface ISlider{
    min:number;
    max:number;
    value:number;
    unit:number;
}

export class Slider implements ISlider{
    min: number;
    max: number;
    value: number;
    unit: number;
constructor(data?:ISlider){
    if(data){
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }
}
}