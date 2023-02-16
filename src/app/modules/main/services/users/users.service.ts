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

  createUser(user : NewUserModel): Observable<INewUser> {
    return this.httpClient.post<INewUser>('http://localhost:3000/security/sign-up', user);
  }

  getAccountById(id: string): Observable<AccountInterface[]>{
    return this.httpClient.get<AccountInterface[]>('http://localhost:3000/account/getAccount/' + id)
  }

}
