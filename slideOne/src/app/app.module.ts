import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideOneComponent,
    SlideTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
