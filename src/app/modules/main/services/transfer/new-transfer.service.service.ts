import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TransferInterface } from 'src/app/modules/banco/interfaces/transfer.interface';
import { TransferModel } from 'src/app/modules/banco/interfaces/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class NewTransferServiceService {
  outcome = new BehaviorSubject<string>('');
  income = new BehaviorSubject<string>('');
  transfer = new BehaviorSubject<string>('');
  /**
   * The function takes a customerId as a parameter and then uses the next() method to pass the
   * customerId to the outComeId subject
   * @param {string} customer - string - The customer ID that we want to pass to the customer-details
   * component.
   */
  setCustomerOut(customer: string) {
    this.outcome.next(customer);
  }
  /**
   * It takes a string as an argument and sets the value of the transferId property to the value of the
   * argument
   * @param {string} transfer - The ID of the transfer.
   */
  setTransferId(transfer: string) {
    this.transfer.next(transfer);
  }
  /**
   * The function takes a customerId as a parameter and then uses the next() method to pass the
   * customerId to the inComeId subject
   * @param {string} customerId - The customer ID that you want to pass to the other component.
   */
  setCustomerIn(customer: string) {
    this.income.next(customer);
  }
  /**
   * The function returns an observable of type string
   * @returns Observable<string>
   */
  getCustomerObservOut(): Observable<string> {
    return this.outcome.asObservable();
  }
  /**
   * It returns an observable that emits the value of the transferId subject
   * @returns An observable of type string.
   */
  getTransferIdObserv(): Observable<string> {
    return this.transfer.asObservable();
  }
  /**
   * It returns the value of the transferId subject
   * @returns The value of the transferId property.
   */
  getTransferIdSubject() {
    return this.transfer.getValue();
  }
  /**
   * This function returns the value of the outComeId property
   * @returns The value of the outComeId property.
   */
  getCustomerSubjectOut() {
    return this.outcome.getValue();
  }
  /**
   * The function returns an observable of type string
   * @returns Observable<string>
   */
  getCustomerObservIn(): Observable<string> {
    return this.income.asObservable();
  }
  /**
   * This function returns the value of the inComeId property
   * @returns The value of the inComeId property.
   */
  getCustomerSubjectIn() {
    return this.income.getValue();
  }
  constructor(private readonly httpClient: HttpClient) {}
  /**
   * This function creates a new transfer and returns an observable of type TransferInterface
   * @param {TransferModel} transfer - TransferModel - this is the model that we created earlier.
   * @returns Observable<TransferInterface>
   */
  createTransfer(transfer: TransferModel): Observable<TransferInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `access_token ${localStorage.getItem('access_token')}`,
      }),
    };
    return this.httpClient.post<TransferInterface>(
      'http://localhost:3000/transfer/create',
      transfer,
      httpOptions
    );
  }
  /**
 * Obtiene los detalles de una transferencia específica mediante su ID.
 * @param {string} transferId - El ID de la transferencia que se desea obtener.
 * @returns {Observable<TransferInterface>} - Un observable que emite un objeto con los detalles de la transferencia.
 */
  getTransfer(transferId: string): Observable<TransferInterface> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `access_token ${localStorage.getItem('access_token')}`,
      }),
    };
    return this.httpClient.get<TransferInterface>(
      'http://localhost:3000/transfer/select/' + transferId,
      httpOptions
    );
  }
}
