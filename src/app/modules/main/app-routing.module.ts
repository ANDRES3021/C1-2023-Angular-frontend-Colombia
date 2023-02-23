import { DatosUsuarioComponent } from '../banco/pages/datos-usuario/datos-usuario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { LogComponent } from '../auth/pages/log/log.component';
import { PrincipalComponent } from '../banco/pages/principal/principal.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['banco/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['banco/home']);
const routes: Routes = [
  { path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)  //localhost:4200/banco

  },


   { path: 'banco',
    loadChildren: () => import('src/app/modules/banco/banco.module').then(m => m.BancoModule)  //localhost:4200/banco

  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
