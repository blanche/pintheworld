import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

let AppModule = NgModule({
    imports: [ BrowserModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAgOrFWDMyp4XFYQRlY1a-cNxKNPz56ZQ4'
                })
             ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
})
.Class({
  constructor: function() {}
});

export {AppModule};
