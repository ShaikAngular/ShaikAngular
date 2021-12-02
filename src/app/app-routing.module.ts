import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { ValidateComponent } from './validate/validate.component';

const routes: Routes = [
  { 
    path:  '',
    component:  MainComponent,
  },
  { 
    path:  'ValidateComponent',
    component:  ValidateComponent,
  },
  { 
    path:  'PdfviewerComponent',
    component:  PdfviewerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
