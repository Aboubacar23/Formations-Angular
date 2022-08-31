import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTemplateComponent } from './form-template/form-template.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule,
    AuthModule
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
