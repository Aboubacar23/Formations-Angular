import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/Face-snap';
import { FaceSnapService } from '../service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;


  constructor(
    private facSnapService : FaceSnapService
  ) { }

  ngOnInit(): void {
  }

  onAddSnap(){ 
    this.facSnapService.getFaceSnapById(this.faceSnap.id);
  }

  onNoSnap(){
    this.faceSnap.snaps--;
  }

}
