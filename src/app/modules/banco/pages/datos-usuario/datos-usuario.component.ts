import { Router } from '@angular/router';
import { AccountInterface } from '../../interfaces/account.interface';
import { UsersService } from './../../../main/services/users/users.service';
import { UserModel } from './../../../main/models/user.model';
import { Component, OnInit } from '@angular/core';
import { PhoneNumberPipe } from 'src/app/modules/main/pipes/phoneNumber.pipe';
@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.scss']
})
/* Creating a class called DatosUsuarioComponent that implements the OnInit interface. */
export class DatosUsuarioComponent implements OnInit {
 accounts: AccountInterface[];

  constructor(private readonly userService : UsersService, private readonly router: Router) {
  this.accounts = new Array<AccountInterface>()
  }
  verTransferencia(id: string){
    localStorage.setItem('account', id)
    this.router.navigate(['banco/historialtransferencias'])
  }
  /**
   * The function gets the id from the local storage and uses it to get the account details from the
   * database
   */
  ngOnInit(): void {
    const idStorage = localStorage.getItem('id') as string;
    console.log(localStorage.getItem('token'));

    this.userService.getAccountById(idStorage).subscribe({
      next: data => {
        console.log(data);
        this.accounts = data;
        localStorage.setItem('accounts', JSON.stringify(data));
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

}
