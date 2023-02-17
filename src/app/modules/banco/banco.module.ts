import { PhoneNumberPipe } from './../main/pipes/phoneNumber.pipe';
import { DepositComponent } from './pages/deposit/deposit.component';
import { bancoRoutingModule } from './banco-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../main/validators/app-routing.module';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { HistorialComponent } from './pages/historial/historial.component';

import { LogComponent } from './pages/log/log.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarvarComponent } from './components/narvar/narvar/narvar.component';
import { NewAccountComponent } from './components/new-account/new-account.component';




@NgModule({
  declarations: [
    DatosUsuarioComponent,
    HistorialComponent,
    LogComponent,
    PrincipalComponent,
    RegisterComponent,
    NarvarComponent,
    DepositComponent,
    NewAccountComponent,
    PhoneNumberPipe,




  ],
  imports: [
    CommonModule, bancoRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
  ]
})
export class BancoModule { }
