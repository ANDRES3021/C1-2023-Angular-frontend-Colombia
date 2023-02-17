export class AccountModel{
  Customer: string;
  accountType: string;
  balance: number;
  state: true;
constructor(Customer: string,
  accountType: string,
  balance: number,
  state: true){
    this.Customer = Customer,
    this.accountType = accountType,
    this.balance = balance,
    this.state = state
  }
 }
