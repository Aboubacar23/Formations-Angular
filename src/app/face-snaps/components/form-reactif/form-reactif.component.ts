import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/Face-snap';
import { FaceSnapService } from 'src/app/core/service/face-snap.service';

@Component({
  selector: 'app-form-reactif',
  templateUrl: './form-reactif.component.html',
  styleUrls: ['./form-reactif.component.scss']
})
export class FormReactifComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreviews$! : Observable<FaceSnap>;
  url!: RegExp;

  constructor(
    private formBuilder : FormBuilder,
    private router :  Router,
    private snapService  : FaceSnapService
    ) { }

  ngOnInit(): void {
    this.url = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;    this.snapForm = this.formBuilder.group({
      title : [ null, Validators.required],
      description : [null, Validators.required],
      imageUrl : [null, [Validators.required, Validators.pattern(this.url)]],
      location : [null] ,
      snaps : [null] 
    },{
      updateOn : 'blur'
    });

    this.faceSnapPreviews$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0,
        dateCreation :  new Date()

      }))
    )
  }

  onSubmitForm(){
    this.snapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/faceSnaps'))
    ).subscribe();
  }
}
