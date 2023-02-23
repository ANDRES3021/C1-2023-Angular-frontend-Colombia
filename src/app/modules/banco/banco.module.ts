import { PhoneNumberPipe } from './../main/pipes/phoneNumber.pipe';
import { DepositComponent } from './pages/deposit/deposit.component';
import { bancoRoutingModule } from './banco-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { HistorialComponent } from './pages/historial/historial.component';

import { PrincipalComponent } from './pages/principal/principal.component';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarvarComponent } from './components/narvar/narvar/narvar.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { TransferComponent } from './pages/transfer/transfer/transfer.component';
import { HistorialTransferComponent } from './pages/historial2/historial-transfer/historial-transfer.component';




@NgModule({
  declarations: [
    DatosUsuarioComponent,
    HistorialComponent,
    PrincipalComponent,
    NarvarComponent,
    DepositComponent,
    NewAccountComponent,
    PhoneNumberPipe,
    TransferComponent,
    HistorialTransferComponent,

  ],
  imports: [
    CommonModule, bancoRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
  ]
})
export class BancoModule { }
