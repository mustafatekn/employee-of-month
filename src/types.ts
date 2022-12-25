export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
  company: Company;
  website: string;
}

export interface Company {
  name: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
