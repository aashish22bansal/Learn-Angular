// Importing some of the required modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // This lists all the bootstrap arrays which are known to angular at that point of time by analysing the index.html file. The circle closes here as we are referencing the AppComponent. After this, Angular reads the app.component files.
})
export class AppModule { }
