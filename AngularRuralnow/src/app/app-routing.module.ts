import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "src/app/components/landing-page/landing-page.component";
import { PageNotFoundComponentComponent } from "src/app/page-not-found-component/page-not-found-component.component";

const routes: Routes = [
  { path: "home", component: LandingPageComponent },
  
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}