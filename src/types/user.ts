export interface Address{
    street: string;
    city: string;
    zipcode:string;
    suite:string;
    geo?:Geo;
}

export interface Geo{
    lat:string;
    lng:string;
}

export interface Company {
    name:string;
    catchPhrase:string;
    bs:string;
}

export interface User {
  id: number;
  name: string;
  username:string;
  email: string;
  address:Address;
  phone:string;
  website?:string;
  company?:Company
}