import { AccountInterface } from '../../../banco/interfaces/account.interface';
import { IDocumenType } from '../../../banco/interfaces/documentType.interface';
import { IUsers } from '../../../banco/interfaces/users.interface';
import { IUser } from '../../../banco/interfaces/user.interface';
import { INewUser } from '../../../banco/interfaces/new-user.interface';
import { Observable } from 'rxjs';
import { NewUserModel } from './../../models/new-user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }
  /**
 * Envía una solicitud para crear un nuevo usuario con la información proporcionada.
 * @param {NewUserModel} user - Un objeto que contiene los detalles del nuevo usuario que se desea crear.
 * @returns {Observable<INewUser>} - Un observable que emite un objeto que representa el nuevo usuario creado.
 */
  createUser(user : NewUserModel): Observable<INewUser> {
    return this.httpClient.post<INewUser>('http://localhost:3000/security/sign-up', user);
  }
/**
 * Obtiene una lista de cuentas asociadas con el ID de usuario especificado.
 * @param {string} id - El ID del usuario del cual se desean obtener las cuentas.
 * @returns {Observable<AccountInterface[]>} - Un observable que emite una matriz de objetos que representan las cuentas del usuario.
 */
  getAccountById(id: string): Observable<AccountInterface[]>{
    return this.httpClient.get<AccountInterface[]>('http://localhost:3000/account/getAccount/' + id)
  }

}
