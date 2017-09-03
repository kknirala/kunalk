
TechScan.controller('profileCtrl', function($scope, $rootScope, CASTAPI, $stateParams) {
	$rootScope.showLoading = true;
	$scope.profile = [];
	$scope.noData = false;
	CASTAPI.get("https://api.github.com/search/users?q="+$rootScope.sel_obj.sname).then(function(result){
		if(result!="error"){
			$scope.profile = result.data;
			$rootScope.showLoading = false;
		}
		else
		{
			CASTAPI.get("json/user.json").then(function(result){
				$scope.profile = result.data;
				$rootScope.showLoading = false;
			});
		}
	});
	$scope.getList = function(i){
		$scope.stars = [];
		$scope.npApi = '';
		$scope.repos = [];
		$scope.followers  = [];
		$scope.following = [];
		$scope.noData = false;
		$scope.npApi = "No data found";
		switch(i){
			case 1:
				$scope.npApi = "No data found";
				break;
			case 2:
					if($scope.profile.total_count>0 && $scope.profile.items[0].repos_url != undefined){
						CASTAPI.get($scope.profile.items[0].repos_url).then(function(result){
							if(result != "error"){
								$scope.repos = result.data;
							}
							else{
								$scope.noData = true;
								$scope.repos = [];	
							}
						}); 
					} 
				break;
			case 3:
					if($scope.profile.total_count>0 && $scope.profile.items[0].starred_url != undefined){
						CASTAPI.get($scope.profile.items[0].starred_url).then(function(result){
							if(result != "error"){
								$scope.stars = result.data;
							}
							else{
								$scope.noData = true;
								$scope.stars = [];
							}
						});
					}	
				
				break;
			case 4:
					if($scope.profile.total_count>0 && $scope.profile.items[0].followers_url != undefined){
						CASTAPI.get($scope.profile.items[0].followers_url).then(function(result){
							if(result != "error"){
								$scope.followers = result.data;
							}
							else{
								$scope.noData = true;
								$scope.followers = [];
							}
						});
					}
				break;
			case 5:
					if($scope.profile.total_count>0 && $scope.profile.items[0].following_url != undefined){
						CASTAPI.get($scope.profile.items[0].following_url).then(function(result){
							if(result != "error"){
								$scope.following = result.data;
							}
							else{
								$scope.noData = true;
								$scope.following = [];
							}	
						});
					}
				break;
			default:
				$scope.npApi = "No such API found";
		}
	}
	$scope.getList(1);
	$scope.ErrorReport = function(){}
	$scope.nod = function(d){
		var date = new Date();
		cd = Date.parse(date) - Date.parse(d);
		return Math.ceil(cd / (1000 * 3600 * 24)); 
	}
});	
