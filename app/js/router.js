module.exports = function(stocksApp) {
  stocksApp.config(['$routeProvider', function($route){  //.config is for provider
    $route
      .when('/stocks/list', {
        templateUrl: '/templates/stocks/views/stocks_view.html',
        controller: 'StocksController'
      })
      .when('/users/signup', {
        templateUrl: '/templates/users/views/signupin_view.html',
        contorller: 'SignupController'
      })
      .when('/users/signin', {
        templateUrl: 'templates/users/views/signupin_view.html',
        contorller: 'SigninController'
      })
      .otherwise({
        redirectTo: '/users/signup'
      });
  }]);
};