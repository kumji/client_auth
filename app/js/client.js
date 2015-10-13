require('angular/angular'); // the way of angular into app, no variable, has to be set on the window add global level two functions 
var angular = window.angular;
require('angular-route');
var stocksApp = angular.module('stocksApp', ['ngRoute']); //[] global level app dependencies [] creating a new module called checkoutApp

require('./services/services')(stocksApp);
require('./directives/directives')(stocksApp);
//require('./filters/filters')(stocksApp);
require('./stocks/stocks')(stocksApp);
require('./users/users')(stocksApp);
require('./router')(stocksApp);