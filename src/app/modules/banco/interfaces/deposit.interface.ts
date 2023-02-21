import { AccountInterface } from 'src/app/modules/banco/interfaces/account.interface';


export interface depositInterface {
  id: string;
  account: AccountInterface;
  amount: 0;
  dateTime: Date | number;
}
