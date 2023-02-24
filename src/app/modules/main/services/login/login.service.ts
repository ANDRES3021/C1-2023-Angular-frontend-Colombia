import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/modules/banco/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}
  /**
 * Envía una solicitud de inicio de sesión al servidor con las credenciales proporcionadas.
 * @param {string} email - El correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 * @returns {Observable<IUsers>} - Un observable que emite el objeto del usuario que inició sesión.
 */
  sendLogin(email: string, password: string): Observable<IUsers> {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post<IUsers>('http://localhost:3000/security/sign-in', body);
  }
}

