export class UserModel implements IUser {
  id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: IEyeColor;
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: string;
  longitude: string;
  tags: string[];
  range: number[];
  friends: IFriend[];
  greeting: string;
  favoriteFruit: IFavoriteFruit;
}

export interface IUser {
  id: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: IEyeColor;
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  latitude: string;
  longitude: string;
  tags: string[];
  range: number[];
  friends: IFriend[];
  greeting: string;
  favoriteFruit: IFavoriteFruit;
}

export enum IEyeColor {
  Blue = 'blue',
  Brown = 'brown',
  Green = 'green',
}

export enum IFavoriteFruit {
  Apple = 'apple',
  Banana = 'banana',
  Strawberry = 'strawberry',
}

export interface IFriend {
  id: number;
  name: string;
}

export interface IName {
  first: string;
  last: string;
}

