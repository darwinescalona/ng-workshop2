import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MastheadComponent } from './pages/masthead/masthead.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PublicComponent,
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ],
  bootstrap: [PublicComponent],
})
export class PublicModule {}
