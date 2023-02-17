import { NewUserModel } from '../../../main/models/new-user.model';
import { UsersService } from '../../../main/services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
/* It creates a class called RegisterComponent. */
export class RegisterComponent{
  state:boolean = true;
  frmFormulario: FormGroup;

  /**
   * The constructor is a function that is called when a new instance of the class is created
   * @param {UsersService} customerService - UsersService
   */
  constructor(public readonly customerService: UsersService) {
    this.frmFormulario = new FormGroup({
      documentTypeId: new FormControl('', Validators.required),
      document: new FormControl('', Validators.required),
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.pattern(new RegExp(environment.regexEmail)),

      ]),
      phone: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
    });
  }
  /**
   * The function registercustomer() is called when the user clicks on the button "Register" in the
   * form
   */
  registercustomer(): void {
    this.frmFormulario.get('email')?.addValidators(Validators.email);
    this.frmFormulario.get('email')?.updateValueAndValidity();
    console.log('registercustomer', this.frmFormulario);
    console.log(this.frmFormulario.getRawValue());
    this.customerService.createUser(this.frmFormulario.getRawValue() as NewUserModel).subscribe({
      next: token => {
        localStorage.setItem('token', token.access_token);
        localStorage.setItem('id', token.id);
      },
      error: (err) => console.error(err),
      complete: () => console.info("completado"),
    });
  }

  ngOnInit(): void {

   }

}


