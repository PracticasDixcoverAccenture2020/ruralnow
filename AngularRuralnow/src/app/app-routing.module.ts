import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


//components
import { LandingPageComponent } from "src/app/components/landing-page/landing-page.component";
import { PageNotFoundComponentComponent } from "src/app/page-not-found-component/page-not-found-component.component";
import {ListadoCasasComponent} from "src/app/components/listado-casas/listado-casas.component";
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  { path: "home", component: LandingPageComponent },
  { path: "houses", component: ListadoCasasComponent },
  { path: "contact", component: ContactUsComponent },

  
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}