import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: TemplateComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
