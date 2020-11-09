import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ListadoCasasComponent } from './components/listado-casas/listado-casas.component';


//Modules
import { SharedModule } from "./modules/shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { SelectHuespedesComponent } from './select-huespedes/select-huespedes.component';
import { SelectFechaEntradaComponent } from './select-fecha-entrada/select-fecha-entrada.component';
import { SelectFechaSalidaComponent } from './select-fecha-salida/select-fecha-salida.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    BuscadorComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    ListadoCasasComponent,
    SelectHuespedesComponent,
    SelectFechaEntradaComponent,
    SelectFechaSalidaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
