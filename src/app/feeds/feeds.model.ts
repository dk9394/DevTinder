import { IUser } from '../app-services/user.model';

export interface IFeedsResponse {
  message: string;
  userMessage: string;
  data: IUser[];
  status: number;
}
