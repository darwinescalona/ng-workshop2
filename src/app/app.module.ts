import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
