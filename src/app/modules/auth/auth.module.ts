
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from '../auth/pages/log/log.component';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    LogComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, authRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule,
  ]
})
export class AuthModule { }
