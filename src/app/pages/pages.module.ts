import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modulos
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PhotographyComponent } from './photography/photography.component';
import {HttpClientModule} from '@angular/common/http';
import { TravelComponent } from './photography/travel/travel.component';
import { SportComponent } from './photography/sport/sport.component';
import { DocumentaryComponent } from './photography/documentary/documentary.component';



@NgModule({
  declarations: [
    HomeComponent,
    PortfolioComponent,
    PhotographyComponent, 
    TravelComponent,
    SportComponent,
    DocumentaryComponent,
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
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class PagesModule { }
