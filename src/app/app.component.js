/* 'app' is the global namespace for this application. 
    We'll add all the code artifacts to this one global object.
    Most application files export one thing by adding that thing to the app namespace. Our app.component.js file exports the AppComponent.
        app.AppComponent =
*/

import {Component} from '@angular/core';

import appTemplate from './app.component.html'

import '../../public/css/styles.css';
import appStyling from './app.component.css';
import '../main.js';
import {GOOGLE_MAPS_DIRECTIVES,GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';

let AppComponent = Component({
    selector: 'my-app',
    template: appTemplate,
    styles: [appStyling],
    directives: [GOOGLE_MAPS_DIRECTIVES]
})
.Class({
    constructor: function() {
    }
});

export {AppComponent};
