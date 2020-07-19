import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <a routerLink="/viewdetails">Dashboard</a> |
    <a routerLink="/about">About</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "ng-lazy-load";
}
