import {Component, OnInit} from '@angular/core';
import {filter} from "rxjs";
import {AuthService} from "./shared/services/auth.service";
import {NavigationEnd, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PCBuilder';
  page = '';
  loggedInUser?: firebase.default.User | null;

  routes: Array<string> = [];

  constructor(private router: Router, private authService: AuthService) {
    // parameter adattagok
  }

  ngOnInit() {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    // rxjs - reaktiv programozas
    // subscribe
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage = (evts.urlAfterRedirects as string).split('/')[1] as string;
      if (this.routes.includes(currentPage))
        this.page = currentPage;
    });
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  isUserOnMain(){
    return (this.page === 'main');
  }

  changePage(selectedPage: string) {
    // this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if(event === true){
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout().then(() => {
      console.log('Logged out successfully!');
    }).catch(error => {
      console.log(error);
    });
  }
}
