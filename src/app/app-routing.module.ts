import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: 'login', loadChildren: () => LoginModule
  // },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
