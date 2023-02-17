import { Observable } from 'rxjs';
import { AccountInterface } from 'src/app/modules/banco/interfaces/account.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAccountService {


  constructor(private readonly httpClient: HttpClient) { }
  createAccount(
    accountTypeId: string,
    Customer: string,
  ): Observable<AccountInterface> {
    const newAccount = {
      accountType: accountTypeId,
      Customer: Customer,
      balance: "0",
      state: true
    };
  return this.httpClient.post<AccountInterface>(
    "http://localhost:3000/account", newAccount
  );
}
// getAll(customer: string): Observable<AccountInterface{}> {
//   return this.httpClient.get<AccountInterface{}>("http://localhost:3000/account/getAccount" + customer)
// }
}
