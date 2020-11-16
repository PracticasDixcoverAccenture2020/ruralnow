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
    MatSidenavModule,
    SidebarModule,
    MatSliderModule

    
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
    MatSidenavModule,
    SidebarModule,
    MatSliderModule
  ],
  entryComponents: []
})
export class SharedModule {}