import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPage } from './auth.page';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPage,
    children: [
      {
        path: 'signin',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./signin/signin.module').then(m => m.SigninPageModule)
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./register/register.module').then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'password',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./password/password.module').then(m => m.PasswordPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
