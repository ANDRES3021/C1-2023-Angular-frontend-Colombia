import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { depositInterface } from 'src/app/modules/banco/interfaces/deposit.interface';
import { TransferInterface } from 'src/app/modules/banco/interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private readonly httpClient: HttpClient) {}
  /**
 * Obtiene todos los depósitos realizados por un usuario específico.
 * @param {string} id - El ID del usuario cuyos depósitos se desean obtener.
 * @returns {Observable<depositInterface[]>} - Un observable que emite un array con los depósitos realizados por el usuario.
 */
  getDepositAll(id: string): Observable<depositInterface[]> {
    return this.httpClient.get<depositInterface[]>(
      'http://localhost:3000/deposit/history-deposit/' + id
    );
  }
  /**
 * Obtiene el historial de transferencias realizadas por un usuario específico.
 * @param {string} id - El ID del usuario cuyo historial de transferencias se desea obtener.
 * @returns {Observable<TransferInterface[]>} - Un observable que emite un array con el historial de transferencias del usuario.
 */
  getTransferHistory(id: string): Observable<TransferInterface[]> {
    const body = { actualPage: 1, range: 5 };
    return this.httpClient.post<TransferInterface[]>(
      'http://localhost:3000/transfer/history/' + id,
      body
    );
  }
}
