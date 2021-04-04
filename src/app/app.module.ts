import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminModuleModule} from './admin-module/admin-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AdminModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
