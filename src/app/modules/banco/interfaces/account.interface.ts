import { IUser } from './user.interface';
export interface AccountInterface {
  id: string;
  balance: number;
  state: boolean;
  customer: IUser;
  accountType: {
    id: string;
    name: string;
    state: boolean;
  }
}
