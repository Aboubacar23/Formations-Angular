import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/Face-snap';
import { FaceSnapService } from 'src/app/core/service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  //faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$! : Subject<boolean>;

  constructor(
    private faceSnapService : FaceSnapService
  ){}
  
  ngOnInit(): void {
    //this.faceSnaps$ = this.faceSnapService.getAllFaceSnape();
    this.faceSnaps$ = this.faceSnapService.getAllFaceSpns();
  }
  

}