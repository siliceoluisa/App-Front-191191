import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path:'Users',
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//URLS