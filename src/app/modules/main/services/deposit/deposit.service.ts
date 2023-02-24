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
  /**
 * Crea un nuevo depósito en el servidor.
 * @param {DepositModel} deposit - El objeto que contiene la información del depósito.
 * @returns {Observable<DepositInterface>} - Un observable que emite el depósito creado.
 */
  createDeposit(deposit: DepositModel): Observable<DepositInterface> {
    return this.httpClient.post<DepositInterface>(
      'http://localhost:3000/deposit/create',
      deposit
    );
  }
  /**
 * Obtiene un depósito existente del servidor.
 * @param {string} id - El ID del depósito a obtener.
 * @returns {Observable<DepositInterface>} - Un observable que emite el depósito solicitado.
 */
  getDeposit(id: string): Observable<DepositInterface> {
    return this.httpClient.get<DepositInterface>(
      'http://localhost:3000/deposit/' + id
    );
  }
}
