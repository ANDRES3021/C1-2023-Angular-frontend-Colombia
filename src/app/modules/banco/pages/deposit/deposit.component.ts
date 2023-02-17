import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,

} from '@angular/forms';
import { DepositService } from 'src/app/modules/main/services/deposit/deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  frmDeposit: FormGroup;

  constructor(
    private readonly depositService: DepositService,
    private frmBuilder: FormBuilder
  ) {
    this.frmDeposit = this.frmBuilder.group({
      account: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(new RegExp(/\d+(\.\d{0,9})?/)),
      ]),
    });
  }

  createDeposit() {
    this.depositService.createDeposit(this.frmDeposit.getRawValue()).subscribe({
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

  ngOnInit(): void {}
}
