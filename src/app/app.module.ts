import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { MatInputModule, MatToolbarModule, MatSelectModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RequestFormComponent } from './request-form/request-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { MatRangeDatepickerModule } from '@angular/material';
//import { MatRangeNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    RequestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatNativeDateModule,
    RouterModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    //MatRangeDatepickerModule, 
    //MatRangeNativeDateModule,
    MatDatepickerModule
  ],
  entryComponents: [
    RequestFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
