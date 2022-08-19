import { Component, OnInit } from '@angular/core';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/Face-snap';
import { FaceSnapService } from '../service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  private destroy$! : Subject<boolean>;

  constructor(
    private faceSnapService : FaceSnapService
  ){}
  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapService.getAllFaceSnape();

    interval(1000).pipe(
      takeUntil(this.destroy$),
     // take(2),
      tap(console.log)
    ).subscribe()
 
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}