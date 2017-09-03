
TechScan.controller('technologyCtrl', function($scope, $rootScope, $http, $state, LangService) {
		$rootScope.showLoading = false;
		
		$scope.listData = LangService.getLanguages();
		$scope.goToRepo =function(l){
			$rootScope.sel_obj.slan=l;
			$state.go("repo");
		}
});	

