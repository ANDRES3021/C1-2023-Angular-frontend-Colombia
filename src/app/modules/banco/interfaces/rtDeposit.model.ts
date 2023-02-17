import { AccountInterface } from "./account.interface";

export interface IResDeposit {
  id: string;
  account: AccountInterface;
  amount: number;
}
