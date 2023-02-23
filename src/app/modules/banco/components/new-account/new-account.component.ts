import { Router } from '@angular/router';
import { NewAccountService } from '../../../main/services/account/new-account.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
/* This class is a component that uses the newAccountService to create a new account */
export class NewAccountComponent implements OnInit {

  constructor(private readonly newAccountService: NewAccountService, private readonly router: Router) { }

  /**
   * The function takes in an accountTypeId as a parameter, and then calls the createAccount function
   * in the newAccountService, which takes in the accountTypeId and the userId as parameters
   * @param {string} accountTypeId - the id of the account type you want to create
   */
  newAccount(accountTypeId: string):void{
    console.log(accountTypeId, localStorage.getItem("id")),
    this.newAccountService.createAccount(accountTypeId, localStorage.getItem("id") as string).subscribe({
      next: data => {console.log(data), this.router.navigate(['banco/usuario'])},
      error: err => {console.log(err);
        console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha habido un error al crear la cuenta',
          });
      },
      complete: () => {
        console.log("complete");
        Swal.fire({
          icon: 'success',
          title: '¡creacion de cuenta exitosa!',
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  }
  ngOnInit(): void {
  }

}
