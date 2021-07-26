import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component copy';
import { DirAllDirective } from './dir-all.directive';

@NgModule({
  declarations: [
    AppComponent,AppComponent2, DirAllDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
