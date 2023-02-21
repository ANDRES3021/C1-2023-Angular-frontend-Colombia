import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { depositInterface } from 'src/app/modules/banco/interfaces/deposit.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private readonly httpClient: HttpClient) {}
  getDepositAll(id: string): Observable<depositInterface[]> {
    return this.httpClient.get<depositInterface[]>(
      'http://localhost:3000/deposit/history-deposit/' + id
    );
  }
}
