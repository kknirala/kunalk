
var TechScan = angular.module('TechScan', ['ui.router','ui.materialize']);

TechScan.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	 $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $urlRouterProvider.otherwise('/technology');
    $stateProvider
	.state('home', {
			cache: false,
            url: '/technology',
            templateUrl: 'views/technology.html',
		    controller: 'technologyCtrl'
        })
        .state('profile', {
			cache: false,
            url: '/profile',
            templateUrl: 'views/profile.html',
			controller: 'profileCtrl'
        })		
        .state('repo', {
			cache: false,
            url: '/repo',
            templateUrl: 'views/repo.html',
			controller: 'repoCtrl'
        });
});
TechScan.run(function($rootScope){
	$rootScope.sel_obj = {sname:'',slan:''};
});