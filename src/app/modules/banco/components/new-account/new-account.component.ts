import { NewAccountService } from '../../../main/services/account/new-account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
/* This class is a component that uses the newAccountService to create a new account */
export class NewAccountComponent implements OnInit {

  constructor(private readonly newAccountService: NewAccountService) { }

  /**
   * The function takes in an accountTypeId as a parameter, and then calls the createAccount function
   * in the newAccountService, which takes in the accountTypeId and the userId as parameters
   * @param {string} accountTypeId - the id of the account type you want to create
   */
  newAccount(accountTypeId: string):void{
    console.log(accountTypeId, localStorage.getItem("id")),
    this.newAccountService.createAccount(accountTypeId, localStorage.getItem("id") as string).subscribe({
      next: data => console.log(data),
      error: err => {console.log(err);
      },
      complete: () => {
        console.log("complete");
      }
    });
  }
  ngOnInit(): void {
  }

}
