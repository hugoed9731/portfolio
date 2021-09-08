import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotographyComponent } from './pages/photography/photography.component';

const routes: Routes = [

      { path: 'home', component: HomeComponent, data:{titulo: 'Home'}},
      { path: 'portfolio', component: PortfolioComponent, data:{titulo: 'Portfolio'}},
      { path: 'photography', component: PhotographyComponent, data:{titulo: 'Photography'}},
      {path: '**', pathMatch: 'full', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
