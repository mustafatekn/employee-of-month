export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
  company: Company;
  website: string;
  albums: Albums;
  voteCount?: number;
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

export interface Photo {
  thumbnailUrl: string;
}

export interface Albums {
  data: [
    {
      photos: {
        data: [{ thumbnailUrl: string }];
      };
    }
  ];
}

export interface UserState {
  employees: User[];
}

export interface IEmployeeCardProps {
  user: User;
}
