import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepositInterface } from 'src/app/modules/banco/interfaces/rtDeposit.model';

import { DepositModel } from '../../models/eposit.Model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private readonly httpClient: HttpClient) {}

  createDeposit(deposit: DepositModel): Observable<DepositInterface> {
    return this.httpClient.post<DepositInterface>(
      'http://localhost:3000/deposit/create',
      deposit
    );
  }

  getDeposit(id: string): Observable<DepositInterface> {
    return this.httpClient.get<DepositInterface>(
      'http://localhost:3000/deposit/' + id
    );
  }
}
