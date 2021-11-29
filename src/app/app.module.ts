import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { ValidateComponent } from './validate/validate.component';
import { MainComponent } from './main/main.component';
import { UsersService } from 'src/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    MainComponent
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
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
