import { AuthService } from './../../../main/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/modules/main/services/login/login.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  frmFormulario: FormGroup = new FormGroup({});

  constructor(private loginService: LoginService, private readonly authService: AuthService) {
  }
  ngOnInit(): void {
    this.htmlformulario();
  }
  htmlformulario(): void {
    this.frmFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }
     auth(): void {
      this.authService.GoogleAuth();
     }
  // //envio de datos
  // sendLogin() {
  //   const { email, password } = this.frmFormulario.value;
  //   this.loginService.sendLogin(email, password).subscribe(
  //     token => {
  //       localStorage.setItem('token', token.access_token);
  //       localStorage.setItem('id', token.id);
  //       console.log("inicio de sesion")

  //     },
  //     error => {
  //       console.log('no entro.');
  //     }
  //   );
  }




