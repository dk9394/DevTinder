export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  age?: number;
  profileIconUrl: string;
  gallery?: string[];
  skills?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse {
  status: number;
  message: string;
  userMessage: string;
  data: IUser;
  expiresAt: string;
}

export class User implements IUser {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  age?: number;
  profileIconUrl: string;
  gallery?: string[];
  skills?: string[];
  createdAt: string;
  updatedAt: string;

  constructor(userResponse: IUserResponse) {
    this._id = userResponse.data._id;
    this.firstName = userResponse.data.firstName;
    this.lastName = userResponse.data.lastName;
    this.emailId = userResponse.data.emailId;
    this.password = userResponse.data.password;
    this.age = userResponse.data.age;
    this.profileIconUrl = userResponse.data.profileIconUrl;
    this.gallery = userResponse.data.gallery || [];
    this.skills = userResponse.data.skills || [];
    this.createdAt = userResponse.data.createdAt;
    this.updatedAt = userResponse.data.updatedAt;
  }
}
