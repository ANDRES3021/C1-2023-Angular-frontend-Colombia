import { DepositComponent } from './pages/deposit/deposit.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { RegisterComponent } from './components/register/register.component';
import { LogComponent } from './pages/log/log.component';

import { HistorialComponent } from './pages/historial/historial.component';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'home', //localhost:4200/banco
    component: PrincipalComponent,
},
{ path: 'usuario', //localhost:4200/banco
component: DatosUsuarioComponent,
},
{ path: 'historial', //localhost:4200/banco
component: HistorialComponent,
},
{ path: 'login', //localhost:4200/banco
component: LogComponent,
},
{ path: 'registro', //localhost:4200/banco
component: RegisterComponent,
},
{ path: 'crearcuenta', //localhost:4200/banco
component: NewAccountComponent,
},
{ path: 'deposito', //localhost:4200/banco
component: DepositComponent,
},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class bancoRoutingModule {}
