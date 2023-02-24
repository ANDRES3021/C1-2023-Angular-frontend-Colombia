
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './pages/log/log.component';
import { RegisterComponent } from './pages/register/register.component';




const routes: Routes = [

{ path: 'login', //localhost:4200/banco
component: LogComponent,
},
{ path: 'registro', //localhost:4200/banco
component: RegisterComponent,
},
{
  path: '**',
  redirectTo: 'login'
},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class authRoutingModule {}
