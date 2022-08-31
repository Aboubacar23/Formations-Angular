import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { FormReactifComponent } from './components/form-reactif/form-reactif.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsRoutingModule } from 'src/app/face-snaps/face-snaps-routing.module';


@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    FormReactifComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports : [
    FaceSnapComponent,
    FaceSnapListComponent,
    FormReactifComponent,
    SingleFaceSnapComponent

  ]
})
export class FaceSnapsModule { }
