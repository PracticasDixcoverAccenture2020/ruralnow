import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from "../shared/shared.module";

// Components
import { ListadoCasasComponent } from "src/app/components/listado-casas/listado-casas.component";

@NgModule({
  declarations: [ListadoCasasComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class CasasModule { }


