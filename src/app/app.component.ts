import { Component, inject } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/nav-bar.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent],
  template: `
  <div class="mycontainer">
    <app-nav-bar />
    <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <h1>Welcome to {{title}}!</h1>
          </div>
      </div>
    </div>
    
    <router-outlet />
  </div>
    
  `,
  styles: [],
})
export class AppComponent {
  title = "Claudia\'s Pizza Shop";
  router = inject(Router)
  constructor() {

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event:any) => {
        var eventNav = event as NavigationStart;
        
      });
   
  }
}
