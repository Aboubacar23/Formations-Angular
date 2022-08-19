import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/Face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor() { }
  faceSnaps : FaceSnap[] = [
    {
      id: 1,
      titre: "femme",
      description: "C'est la photo d'une femme blanche",
      imageUrl : 'https://static.remove.bg/remove-bg-web/b873fb3846d2c3ac1a6c3f89e442a23ac724b440/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
      dateCreation : new  Date(),
      snaps : 254.66,

    },
    {
      id: 2,
      titre: "Image 2",
      description: "C'est une photo",
      imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb7tG7kwqd50DTM5uU76d0oG9hSX-o5M3FEQ&usqp=CAU',
      dateCreation : new  Date(),
      snaps : 6,

    },
  ];

  getAllFaceSnape() : FaceSnap[]{
    return this.faceSnaps;
  }

  getFaceSnapById(id: number) : void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == id);
    if(faceSnap){
      faceSnap.snaps ++
    }
    else{
      throw new Error('FaceSnap invalid');
    }
  }

  addFaceSnap(formValue: { titre: string, description: string, imageUrl: string, snaps : number }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        dateCreation: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
}
}
