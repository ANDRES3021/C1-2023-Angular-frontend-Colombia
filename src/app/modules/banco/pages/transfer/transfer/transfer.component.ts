import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewTransferServiceService } from 'src/app/modules/main/services/transfer/new-transfer.service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {

  outcome = this.transferService.getCustomerSubjectOut();
  frmTransfer: FormGroup;

  /**
   * The constructor function is used to initialize the class
   * @param NewTransferServiceService} transferService - TransferService: This is the service that we created
   * earlier.
   * @param {Router} router - Router - This is the Angular Router service.
   */
  constructor(
    private readonly transferService: NewTransferServiceService,
    private readonly router: Router
  ) {
    this.frmTransfer = new FormGroup({
      income: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      outcome: new FormControl('', [
        Validators.required,
        Validators.minLength(10),]),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(new RegExp(/\d+(\.\d{0,9})?/)),
      ]),
      reason: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ]),
    } );
  }


  /**
   * It creates a transfer and then navigates to the vaucher page
   */
  createTransfer() {
    this.transferService
      .createTransfer(this.frmTransfer.getRawValue())
      .subscribe({
        next: (data) => {
          this.transferService.setTransferId(data.id);
          console.log(data);

        },
        error: err => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ha habido un error al hacer la transferencia.',
          });
        },
        complete: () => {
          console.log('complete');
          Swal.fire({
            icon: 'success',
            title: '¡transferencia exitosa!',
            showConfirmButton: false,
            timer: 3000,
          });
        },
      });
  }
}
