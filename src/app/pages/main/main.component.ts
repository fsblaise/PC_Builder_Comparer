import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Log in', cols: 1, rows: 1, pic: 'loginbutton.png', path: "/login" },
          { title: 'Builder', cols: 1, rows: 1, pic: 'PC-building.png', path: "/builder" },
          { title: 'Register', cols: 1, rows: 1, pic: 'registerbutton.png', path: "/signup" },
          { title: 'Comparator', cols: 1, rows: 1, pic: 'pcversusbanner.png', path: "/comparator" }
        ];
      }

      return [
        { title: 'Log in', cols: 1, rows: 1, pic: 'loginbutton.png', path: "/login" },
        { title: 'Builder', cols: 1, rows: 2, pic: 'PC-building.png', path: "/builder" },
        { title: 'Register', cols: 1, rows: 1, pic: 'registerbutton.png', path: "/signup" },
        { title: 'Comparator', cols: 2, rows: 1, pic: 'pcversusbanner.png', path: "/comparator" }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
}
