export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
  website: string;
  albums: Albums;
  voteCount?: number;
  posts: {
    data: Post[];
  };
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

export interface IEmployeePostProps{
    post: Post
}

export interface Comment {
  id: string;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  comments: {
    data: Comment[];
  };
}

