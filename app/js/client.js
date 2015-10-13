require('angular/angular'); // the way of angular into app, no variable, has to be set on the window add global level two functions 
var angular = window.angular;
require('angular-route');
require('angular-base64');
require('angular-cookies');
var stocksApp = angular.module('stocksApp', ['ngRoute', 'base64', 'ngCookies']); //[] global level app dependencies [] creating a new module called checkoutApp

require('./services/services')(stocksApp);
require('./directives/directives')(stocksApp);
//require('./filters/filters')(stocksApp);
require('./stocks/stocks')(stocksApp);
require('./users/users')(stocksApp);
require('./router')(stocksApp);
require('./logout')(stocksApp);