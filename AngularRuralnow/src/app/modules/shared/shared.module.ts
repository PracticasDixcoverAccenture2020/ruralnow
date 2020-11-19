import { CommonModule } from "@angular/common"
import { NgModule } from '@angular/core';

//Angular material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select/';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule,MatFormFieldModule, MatSidenavModule } from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';


import "hammerjs";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule, 
    MatGridListModule,
    MatSidenavModule,
    SidebarModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule
    
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSidenavModule,
    SidebarModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule

  ],
  entryComponents: []
})
export class SharedModule {}