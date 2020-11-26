import { CommonModule } from "@angular/common"
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { ListadoCasasComponent } from './components/listado-casas/listado-casas.component';
import { SelectFechaEntradaComponent } from './components/select-fecha-entrada/select-fecha-entrada.component';
import { SelectFechaSalidaComponent } from './components/select-fecha-salida/select-fecha-salida.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DatalistComponent } from './components/datalist/datalist.component';
import { NuestrosServiciosComponent } from './components/nuestros-servicios/nuestros-servicios.component';
import { DetallesCasasComponent } from './components/detalles-casas/detalles-casas.component';
import { FormReservaComponent } from './components/form-reserva/form-reserva.component';

//Modules
import { SharedModule } from "./modules/shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    FooterComponent,
    PageNotFoundComponentComponent,
    ListadoCasasComponent,
    SelectFechaEntradaComponent,
    SelectFechaSalidaComponent,
    ContactUsComponent,
    DatalistComponent,
    NuestrosServiciosComponent,
    DetallesCasasComponent,
    FormReservaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
