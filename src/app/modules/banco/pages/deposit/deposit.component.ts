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
  frmDeposit: FormGroup;

  /**
   * The constructor function is used to initialize the class and it is called when the class is
   * instantiated
   * @param {DepositService} depositService - This is the service that we created earlier.
   * @param {FormBuilder} frmBuilder - FormBuilder - This is the FormBuilder service that we imported
   * earlier.
   */
  constructor(
    private readonly depositService: DepositService,
    private frmBuilder: FormBuilder,
    private readonly router: Router
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

  /**
   * The function creates a deposit by calling the createDeposit() function of the depositService,
   * passing in the raw value of the form
   */
  createDeposit() {
    this.depositService.createDeposit(this.frmDeposit.getRawValue()).subscribe({
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
