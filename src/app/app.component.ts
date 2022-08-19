import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$! : Observable<string>;
  ngOnInit(): void {

     this.interval$ = interval(1000).pipe(
      filter(value => value % 3 === 0),
      map(value => value % 2 === 0 ? 
        `Le nombre ${value} est pair` :
        `Le nombre ${value} est impair`
        ),
        tap(text => this.logger(text))
     );
  }
  
  logger(text : string){
    console.log(`log :  ${text}`)
  }
}
