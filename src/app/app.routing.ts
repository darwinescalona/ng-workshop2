import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './pages/error.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'error/:code', component: ErrorComponent },
  { path: 'panel', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
  { path: '', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    SharedModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
