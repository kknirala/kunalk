
TechScan.controller('repoCtrl', function($scope, $rootScope, CASTAPI,$state, LangService) {
	$rootScope.showLoading = true;
	
	$scope.nod = function(d){
		var date = new Date();
		cd = Date.parse(date) - Date.parse(d);
		return Math.ceil(cd / (1000 * 3600 * 24)); 
	}
	function getRepo(){
		CASTAPI.get("https://api.github.com/search/repositories?q="+$rootScope.sel_obj.slan).then(function(result){
			if(result!="error"){
				$scope.repos = result.data;
				$rootScope.showLoading = false;
			}
			else
			{
				CASTAPI.get("json/repo.json").then(function(result){
					$scope.repos = result.data;
					$rootScope.showLoading = false;
				});
			}
		}); 
	}
	getRepo();
	$scope.listData = LangService.getLanguages();
	
	$scope.goToProfile = function(name){
		$rootScope.sel_obj.sname=name;
		
	}
});	
