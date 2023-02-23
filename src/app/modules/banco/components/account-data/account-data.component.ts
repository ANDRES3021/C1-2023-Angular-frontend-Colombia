import { Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountInterface } from '../../interfaces/account.interface';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss']
})
export class AccountDataComponent implements OnInit {
  @Input() account!: AccountInterface;
  @Output() favorite= new EventEmitter<string>();
  constructor(private readonly router: Router) {
  }
  select(){
    this.favorite.emit(this.account.id);

  }
  verTransferencia() {
    localStorage.setItem('account', this.account.id)
    this.router.navigate(['banco/historialtransferencias'])
  }
  ngOnInit(): void {
  }
}
