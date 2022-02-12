import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PdfViewerModule } from 'ng2-pdf-viewer'; 
import { ValidateComponent } from './validate/validate.component';
import { MainComponent } from './main/main.component';
import { UsersService } from 'src/services/users.service';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    MainComponent,
    PdfviewerComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    PdfViewerModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
