import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProvides } from './intercepteur';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({ 
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    HeaderComponent
  ],
  providers: [
    httpInterceptorProvides
  ],
})
export class CoreModule { }
 