export interface IUploadModel{
    url: string;
    type: string;
}

export class UploadModel implements IUploadModel {
    constructor(data?: IUploadModel) {
      if (data) {
        for (var property in data) {
          if (data.hasOwnProperty(property))
            (<any>this)[property] = (<any>data)[property];
        }
      }
    }

    url: string;
    type: string;
  }
  