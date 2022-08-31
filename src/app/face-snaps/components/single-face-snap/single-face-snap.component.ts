import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/Face-snap';
import { FaceSnapService } from 'src/app/core/service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$! : Observable<FaceSnap>;
  faceSnap!: FaceSnap;
  buttonText = 'Oh Snap';
  constructor(
    private faceSnapeService : FaceSnapService,
    private route :  ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapeService.getFaceSnapById(faceSnapId)
  }

  onSnap(id: number)
  {
    if(this.buttonText === 'Oh Snap')
    {
      this.faceSnapeService.snapFaceSnapById(id, 'snap').pipe(
        tap(()=> {
          this.faceSnap$ = this.faceSnapeService.getFaceSnapById(id);
          this.buttonText = 'Oops, unSnap'
        })
      ).subscribe();
    }
    else
    {
      this.faceSnapeService.snapFaceSnapById(id, 'unsnap').pipe(
        tap(() => {
          this.faceSnap$ = this.faceSnapeService.getFaceSnapById(id);
          this.buttonText = 'Oh Snap'
        })
      ).subscribe();
    }
  }
 
}
