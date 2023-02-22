import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/modules/main/services/history/history.service';
import { TransferInterface } from '../../../interfaces/transfer.interface';

@Component({
  selector: 'app-historial-transfer',
  templateUrl: './historial-transfer.component.html',
  styleUrls: ['./historial-transfer.component.scss']
})
export class HistorialTransferComponent implements OnInit {

  historyTransfer: TransferInterface[];
  historyT: object[];
  idAccount: string;
  constructor(private readonly historyService: HistoryService) {
    this.historyT = new Array<object>();
    this.historyTransfer = new Array<TransferInterface>();
    this.idAccount = '';
  }
  ngOnInit(): void {
    this.idAccount = localStorage.getItem('account') ?? '';

    console.log(this.idAccount);
    this.historyService.getTransferHistory(this.idAccount).subscribe({
      next: data => {
        console.log(data);
        this.historyTransfer = data;
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

