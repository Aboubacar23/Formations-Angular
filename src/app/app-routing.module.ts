import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FormReactifComponent } from './form-reactif/form-reactif.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent},
  { path:'faceSnaps', component: FaceSnapListComponent},
  { path:'formTemplate', component: FormTemplateComponent},
  { path:'formReactif', component: FormReactifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
