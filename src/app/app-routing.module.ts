import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./shared/services/auth.guard";

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'builder',
    loadChildren: () => import('./pages/builder/builder.module').then(m => m.BuilderModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'comparator',
    loadChildren: () => import('./pages/comparator/comparator.module').then(m => m.ComparatorModule),
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'not-found',
  //   loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  // },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
