import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,

} from '@angular/forms';
import { Router } from '@angular/router';
import { DepositService } from 'src/app/modules/main/services/deposit/deposit.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
/* Creating a new instance of the DepositComponent class. */
export class DepositComponent implements OnInit {
  frmDeposit = { account: '', amount: "0" };

  constructor(
    private readonly depositService: DepositService,
    private readonly router: Router
  ) {

  }

  /**
   * The function creates a deposit by calling the createDeposit() function of the depositService,
   * passing in the raw value of the form
   */
  createDeposit() {
    this.depositService.createDeposit(this.frmDeposit).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['banco/historial']);
      },
      error: err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha habido un error al hacer el deposito.',
        });
      },
      complete: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Deposito exitoso!',
          showConfirmButton: false,
          timer: 3000,
        });
      },
    });
  }

  ngOnInit(): void {}
}
