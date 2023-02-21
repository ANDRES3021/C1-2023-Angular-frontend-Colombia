import { Component, OnInit } from '@angular/core';
import { NewAccountService } from 'src/app/modules/main/services/account/new-account.service';
import { HistoryService } from 'src/app/modules/main/services/history/history.service';
import { depositInterface } from '../../interfaces/deposit.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  historyDeposit: depositInterface[];
  history: object[];
  idUser: string;
  constructor(
    private readonly historyService: HistoryService,
    private readonly createAccountService: NewAccountService
  ) {
    this.history = new Array<object>();
    this.historyDeposit = new Array<depositInterface>();
    this.idUser = '';
  }
  ngOnInit(): void {
    this.idUser = localStorage.getItem('id') ?? '';
    this.historyService.getDepositAll(this.idUser).subscribe({
      next: data => {
        console.log(data);
        this.historyDeposit = data;
        console.log(data);
      },
      error: err => {
        console.log(err.error.message);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
