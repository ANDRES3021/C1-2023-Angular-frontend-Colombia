import { bancoRoutingModule } from './banco-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../main/validators/app-routing.module';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { LogComponent } from './pages/log/log.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarvarComponent } from './components/narvar/narvar/narvar.component';




@NgModule({
  declarations: [
    DatosUsuarioComponent,
    HistorialComponent,
    TransferenciaComponent,
    LogComponent,
    PrincipalComponent,
    RegisterComponent,
    NarvarComponent,



  ],
  imports: [
    CommonModule, bancoRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ]
})
export class BancoModule { }
