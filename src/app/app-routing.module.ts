import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { FormReactifComponent } from './face-snaps/components/form-reactif/form-reactif.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  { path:'', component: LandingPageComponent, canActivate : [AuthGuard]},
  { path: 'faceSnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule), canActivate : [AuthGuard] },
  { path:'formTemplate', component: FormTemplateComponent, canActivate : [AuthGuard]},
  { path:'formReactif', component: FormReactifComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
