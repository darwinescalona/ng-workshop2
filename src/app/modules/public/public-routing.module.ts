import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { MastheadComponent } from './pages/masthead/masthead.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'about', // child route path
        component: AboutComponent, // child route component that the router renders
      },
      {
        path: 'services', // child route path
        component: ServicesComponent, // child route component that the router renders
      },
      {
        path: 'portfolio', // child route path
        component: PortfolioComponent, // child route component that the router renders
      },
      {
        path: 'contact', // child route path
        component: ContactComponent, // child route component that the router renders
      },
      {
        path: '', // child route path
        component: MastheadComponent, // child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
