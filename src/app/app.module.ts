import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrinterDataFormComponent } from './components/printer-data-form/printer-data-form.component';
import { LabelPreviewComponent } from './components/label-preview/label-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PrinterDataFormComponent,
    LabelPreviewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
