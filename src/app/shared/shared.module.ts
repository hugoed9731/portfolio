import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, // NOS HABILITA USAR COSAS COMO NGIF ETC
    RouterModule,
    FormsModule
  ],
 
})
export class SharedModule { }
