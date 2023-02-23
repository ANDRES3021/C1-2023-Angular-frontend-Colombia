import { HistorialTransferComponent } from './pages/historial2/historial-transfer/historial-transfer.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { RegisterComponent } from '../auth/pages/register/register.component';
import { LogComponent } from '../auth/pages/log/log.component';

import { HistorialComponent } from './pages/historial/historial.component';
import { DatosUsuarioComponent } from './pages/datos-usuario/datos-usuario.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferComponent } from './pages/transfer/transfer/transfer.component';



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
{ path: 'crearcuenta', //localhost:4200/banco
component: NewAccountComponent,
},
{ path: 'deposito', //localhost:4200/banco
component: DepositComponent,
},
{ path: 'transferencia', //localhost:4200/banco
component: TransferComponent,
},
{ path: 'historialtransferencias', //localhost:4200/banco
component: HistorialTransferComponent,
},
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class bancoRoutingModule {}
