import { NewAccountService } from './../../../../main/services/account/new-account.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor(private readonly newAccountService: NewAccountService) { }

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
