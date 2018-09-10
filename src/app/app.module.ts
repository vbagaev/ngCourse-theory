import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundDirective } from './directives/background.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundDirective,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
