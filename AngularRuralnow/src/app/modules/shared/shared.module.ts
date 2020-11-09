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
import {MatDatepickerModule, MatNativeDateModule,MatFormFieldModule } from '@angular/material';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';


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
    DateRangePickerModule
    
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
    DateRangePickerModule
    
  ],
  entryComponents: []
})
export class SharedModule {}