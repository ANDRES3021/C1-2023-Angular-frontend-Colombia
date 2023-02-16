import { IUsers } from '../../interfaces/users.interface';
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
export class RegisterComponent{
  state:boolean = true;
  // documentTypeId: string;
  // document: string;
  // fullName: string;
  // email: string;
  // phone: string;
  // password: string;
  frmFormulario: FormGroup;

  constructor(public readonly customerService: UsersService) {
    // this.documentTypeId = '';
    // this.document = '';
    // this.fullName = '';
    // this.email = '';
    // this.phone = '';
    // this.password = '';
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
        Validators.required,
      ]),
      phone: new FormControl('', Validators.required),

      password: new FormControl('', Validators.required),
    });
  }
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

  // const user = new NewUserModel("12d3fdfdfdfsfd1254t","310258746", "12345644", "123454887", "Carlos pardo", "carlos.pardo@sofka.com.co")
  // this.userService.createUser(user).subscribe({
  //   next: data => console.log(data),
  //   error:err => console.log(err),
  //   complete:() => console.log("complete")
  // })

}


