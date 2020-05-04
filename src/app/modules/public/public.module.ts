import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [PublicComponent, MastheadComponent, AboutComponent, ServicesComponent, PortfolioComponent, ContactComponent],
  imports: [CommonModule, PublicRoutingModule],
  bootstrap: [PublicComponent],
})
export class PublicModule {}
