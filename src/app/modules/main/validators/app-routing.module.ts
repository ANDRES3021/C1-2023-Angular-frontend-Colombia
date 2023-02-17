import { DatosUsuarioComponent } from './../../banco/pages/datos-usuario/datos-usuario.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/compat/auth-guard';
import { LogComponent } from '../../banco/pages/log/log.component';
import { PrincipalComponent } from '../../banco/pages/principal/principal.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['banco/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['banco']);
const routes: Routes = [
  {
    path: 'banco/login',
    component: LogComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard }
  },
  {
    path: 'banco/home',
    component:  PrincipalComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
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
