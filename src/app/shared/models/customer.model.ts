export class CustomerModel implements ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  ipAddress: string;
}

export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  ipAddress: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}
