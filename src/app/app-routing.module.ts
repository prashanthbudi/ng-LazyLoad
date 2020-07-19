import {
  OptInPreloadStartegy,
  NetworkAwarePreloadStrategy,
} from "./loading-strategy/optin-preload-strategy";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "viewdetails",
    loadChildren: "src/app/viewdetails/viewdetails.module#ViewdetailsModule",
    data: { preload: true },
  },
  {
    path: "about",
    loadChildren: "src/app/about/about.module#AboutModule",
    data: { preload: true },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: NetworkAwarePreloadStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
