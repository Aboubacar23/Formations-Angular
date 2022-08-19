import { Component, OnInit } from '@angular/core';
import { filter, interval, map, mergeMap, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$! : Observable<string>;
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
  
  ngOnInit(): void {
   /* interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(async (color) => this.getTrainObservable$(color)),
    //  tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))


    ).subscribe();

     this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `Le nombre ${value} est pair` :
        `Le nombre ${value} est impair`
        ),
        tap(text => this.logger(text))
     );
     */
  }

 /* getTrainObservable$(color : 'rouge' | 'jaune'){
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`); 
  }

  translateColor(color: 'rouge' | 'jaune')
  {
    return color === 'rouge' ? 'red' : 'yellow';
  }

 /* 
  logger(text : string){
    console.log(`log :  ${text}`)
  }
  */
}
