import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoComponent } from './components/listado/listado.component';

//Modules
import { SharedModule } from "./modules/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    BuscadorComponent,
    FooterComponent,
    ListadoComponent
  ],
  imports: [
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
