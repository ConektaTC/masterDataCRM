import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
  { path: 'dashboard', loadChildren: () => import('../../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
