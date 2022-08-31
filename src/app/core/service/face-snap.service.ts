import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/Face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  constructor( private http : HttpClient ) { }
  faceSnaps!: FaceSnap[];
  faceSnaps$! : Observable<FaceSnap>;
  url = "http://127.0.0.1:3000/facesnaps";

  getAllFaceSpns() : Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>(this.url);
  }

  getFaceSnapById(id : number) : Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  addFaceSnap(formValue: { title: string,location: string, description: string, imageUrl: string, snaps : number }) {
    return this.getAllFaceSpns().pipe(
      map(faceSnaps => [...faceSnaps].sort((a,b)=>a.id - b.id )),
      map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map(previousFacesnap => ({
        ...formValue,
        createdDate: new Date(),
        id: previousFacesnap.id + 1,

      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>(this.url, newFaceSnap))
    )
  }

  snapFaceSnapById(id : number, snapType : 'snap' | 'unsnap') : Observable<FaceSnap>
  {
    return this.getFaceSnapById(id).pipe(
      map(faceSnap => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? + 1 : -1)
      })),
      switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
        `http://localhost:3000/facesnaps/${id}`, updatedFaceSnap
      ))
    )
  }


}
