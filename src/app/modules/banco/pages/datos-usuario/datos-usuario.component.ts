import { AccountInterface } from '../../interfaces/account.interface';
import { UsersService } from './../../../main/services/users/users.service';
import { UserModel } from './../../../main/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.scss']
})
export class DatosUsuarioComponent implements OnInit {
 accounts: AccountInterface[];

  constructor(private readonly userService : UsersService) {
  this.accounts = new Array<AccountInterface>()
  }

  ngOnInit(): void {
    const idStorage = localStorage.getItem('id') as string;
    console.log(localStorage.getItem('token'));

    this.userService.getAccountById(idStorage).subscribe({
      next: data => {
        console.log(data);
        this.accounts = data;
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
