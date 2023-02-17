import { AccountInterface } from "./account.interface";

export interface DepositInterface {
  id: string;
  amount: 100;
  account: AccountInterface;
  dateTime: string;
}

