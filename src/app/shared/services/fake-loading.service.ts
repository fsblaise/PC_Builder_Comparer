import {Injectable} from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() {
  }

  // CRUD (Create, Read, Update, Delete)

  // async

  // Callback - deprecated, do not use
  // Promise
  // Observable

  loadingWithPromise(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // let i = 0;
      // const interval = setInterval(() => {
      //   i++;
      //   if (i === 3) {
      //     clearInterval(interval);
      //       if (email === 'test@gmail.com' && password === 'testpw') {
      //         resolve(true);
      //       }else{
      //         reject(false);
      //       }
      //   }
      // }, 1000);
      setTimeout(() => {
        if (email === 'test@gmail.com' && password === 'testpw') {
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  }

  loadingWithObservable(email: string, password: string): Observable<boolean>{
    // data stream
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        // subscriber.next(i);
        if ( i === 3 ){
          if (email === 'test@gmail.com' && password === 'testpw') {
            subscriber.next(true);
            subscriber.complete();
          } else {
            subscriber.error(false);
          }
        }
      }, 1000);
    });
  }
}
