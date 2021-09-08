import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modulos
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotographyComponent } from './photography/photography.component';




@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    PhotographyComponent,
  ],
  exports: [
    HomeComponent,
    PortfolioComponent,
    PhotographyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
