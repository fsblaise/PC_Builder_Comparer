import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() currentPage: string = '';
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    console.log('costructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  ngAfterViewInit(): void{
    console.log('ngAfterViewInit called');
  }

  menuSwitch() {
    this.selectedPage.emit(this.currentPage);
  }

  close(logout?: boolean) {
    if (logout === true){
      this.onLogout.emit(logout);
    }
    this.onCloseSidenav.emit(true);
  }
}
