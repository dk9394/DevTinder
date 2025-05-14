import { IUser } from '../app-services/user.model';

export interface ILoginCredentials {
  emailId: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  userMessage: string;
  data: IUser;
  status: number;
  expiresAt: string;
}
