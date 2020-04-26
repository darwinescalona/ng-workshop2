import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'panel', loadChildren: () => import('./template/template.module').then(m => m.TemplateModule) },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
