import { Conditional } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { audit, combineLatest, concatMap, defer, EMPTY, forkJoin, from, fromEvent, generate, iif, interval, map, merge, mergeAll, observable, Observable, of, partition, range, scan, take, throwError, timer, zip} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit,AfterViewInit{
  @ViewChild("bth")a!:ElementRef
  obs=new Observable();
 

  constructor() { }
  ngAfterViewInit(): void {
    //from event only disply with ngAfterViewInit
    const clicks = fromEvent(this.a.nativeElement, 'click');
  clicks.subscribe(result => console.log(result));

 // interval
  const numbers = interval(1000);
 const takeFourNumbers = numbers.pipe(take(4));
 takeFourNumbers.subscribe(x => console.log('Next: ', x));


 
// merge...

//  const clicks = fromEvent(document, 'click');
// const timer = interval(1000);
// const clicksOrTimer = merge(clicks, timer);
// clicksOrTimer.subscribe(x => console.log(x));
  }

  ngOnInit(): void {
  
   
// obserbles
  this.obs = new Observable((observer) => {

    observer.next(20);
    observer.next(40);
    observer.next(80);
    }) ;

   this.obs.subscribe((value:any) => {
      console.log("Reeding from observable",value * 2)
    });
    
  //creastion operators types
// of operators
of(10, 20, 30,)
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });

  //of using of Arry
  of([1, 2, 3])
  .subscribe({
    next: value => console.log('next:', value),
    error: err => console.log('error:', err),
    complete: () => console.log('the end'),
  });
//defer
  // const clicksOrInterval = defer(() => {
  //   return Math.random() < 0.5
  //     ? fromEvent(document, 'click')
  //     : interval(1000);
  // });
  // clicksOrInterval.subscribe(x => console.log(x));

//From operator

//  const array = [10, 20, 30];
// const result = from(array);

  // result.subscribe(result => console.log(result))
   //genarate
//  const result = generate(0, result => result < 3, result => result + 1, result => result);
//  result.subscribe(result => console.log(result));


const numbers = range(1, 3);
 
numbers.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Anil')
});

// throw error

let errorCount = 0;
 
const errorWithTimestamp$ = throwError(() => {
  const error: any = new Error(`This is error number ${ ++errorCount }`);
  error.timestamp = Date.now();
  return error;
});
 
errorWithTimestamp$.subscribe({
  error: err => console.log(err.timestamp, err.message)
});
 
errorWithTimestamp$.subscribe({
  error: err => console.log(err.timestamp, err.message)
});

// timer operator
const source = of(1, 2, 3,4,5,6,7,8,9,10);

timer(5000)
  .pipe(concatMap(() => source))
  .subscribe(console.log)

  //iiff operator
  const observableIfYouHaveAccess = iif(
    () => accessGranted,
    of('It seems you have an access...'),
    EMPTY
  );
   
   let accessGranted = true;
  observableIfYouHaveAccess.subscribe({
    next: value => console.log(value),
    complete: () => console.log('The end')
  });
   
   accessGranted = false;
  observableIfYouHaveAccess.subscribe({
    next: value => console.log(value),
    complete: () => console.log('The end')
  });
   
//CombineLatest Join creation operators
//   const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
// const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
// const combinedTimers = combineLatest([firstTimer, secondTimer]);
// combinedTimers.subscribe(value => console.log(value));

// forkjoin all values display at a time.....// Imp
const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(4000)
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => console.log('This is how it ends!'),
});

//partition
const observableValues = of(1, 2,  4, 5, 6);
const [evens$, odds$] = partition(observableValues, value => value % 2 === 0);
 
odds$.subscribe(x => console.log('odds', x));
evens$.subscribe(x => console.log('evens', x));


//Zip
const age$ = of(27, 25, 29);
const name$ = of('Foo', 'Bar', 'Beer');
const isDev$ = of(true, true, false);
 
zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev }))
)
.subscribe(x => console.log(x));


//filtering operators
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(audit(ev => interval(1000)));
   result.subscribe(x => console.log(x));
}
// javaScript




}
