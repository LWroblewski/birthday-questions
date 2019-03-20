import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
  exports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
