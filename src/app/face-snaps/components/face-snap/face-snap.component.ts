import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/Face-snap';
import { FaceSnapService } from 'src/app/core/service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;


  constructor(
    private facSnapService : FaceSnapService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`);
}
}
