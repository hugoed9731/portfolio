import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';
// import { TravelComponent } from './pages/photography/travel/travel.component';
import { SportComponent } from './pages/photography/sport/sport.component';
import { DocumentaryComponent } from './pages/photography/documentary/documentary.component';

const routes: Routes = [

      { path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
      { path: 'portfolio', component: PortfolioComponent, data:{titulo: 'Portfolio'}},
      { path: 'photography', component: PhotographyComponent, data:{titulo: 'Photography'}},
      // { path: 'photography/travel/france', component: TravelComponent, data:{titulo: 'travel'}},
      { path: 'photography/sport', component: SportComponent, data:{titulo: 'sport'}},
      { path: 'photography/documentary', component: DocumentaryComponent, data:{titulo: 'documentary'}},
      {path: '**', pathMatch: 'full', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
