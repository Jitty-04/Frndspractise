import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SearchComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
