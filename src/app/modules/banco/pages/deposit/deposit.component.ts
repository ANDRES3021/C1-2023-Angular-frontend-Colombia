import { Component, OnInit } from '@angular/core';
import { DepositService } from 'src/app/modules/main/services/deposit/deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  formulario = { accountId: '', amount: 0 };
  constructor(private readonly depositServie: DepositService) { }
  createDeposit() {
    this.depositServie.createDeposit(this.formulario).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
  ngOnInit(): void {
  }

}
