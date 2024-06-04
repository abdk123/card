export interface IContactInfo {
  id?: number;
  userId?: number;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  location: string;
}

export class ContactInfoModel implements IContactInfo {
  constructor(data?: IContactInfo) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }
  id?: number | undefined;
  userId?: number | undefined;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  location: string;

  update(
    _phoneNumber: string,
    _email: string,
    _dateOfBirth: string,
    _location: string
  ) {
    this.dateOfBirth = _dateOfBirth;
    this.email = _email;
    this.location = _location;
    this.phoneNumber = _phoneNumber;
  }
}
