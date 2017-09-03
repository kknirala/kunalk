TechScan.service('CASTAPI', function($q,$http){
	return{
		get : function (url) {
			var deferred = $q.defer();
			$http.get(url).then(function(result){ deferred.resolve( result ); }, function(err){
				 deferred.resolve("error")
			});
			return deferred.promise;
		}
	}
});
TechScan.service('LangService', function(CASTAPI){
	
	 var lan = [{"lan":"JavaScript","rcount":0,"img_url":"img/javascript.png"},{"lan":"Java","rcount":0,"img_url":"img/java.jpg"},
				{"lan":"Python","rcount":0,"img_url":"img/python.jpg"},{"lan":"C","rcount":0,"img_url":"img/c.png"},
				{"lan":"C++","rcount":0,"img_url":"img/c++.png"},{"lan":"Ruby","rcount":0,"img_url":"img/ruby.png"},
				{"lan":"Go","rcount":0,"img_url":"img/go.jpg"},{"lan":"PHP","rcount":0,"img_url":"img/php.png"},
				{"lan":"CoffeeScript","rcount":0,"img_url":"img/coffeescript.png"},{"lan":"Html","rcount":0,"img_url":"img/html.png"},
				{"lan":"C#","rcount":0,"img_url":"img/c_asp.jpg"},{"lan":"TypeScript","rcount":0, "img_url":"img/typescript.png"}]; 
	angular.forEach(lan, function(l){
		CASTAPI.get("https://api.github.com/search/repositories?q="+l.lan).then(function(result){
			if(result!="error" && result.data.length>0){
				l.rcount = result.data.total_count;
			}
		});
	});  
	this.getLanguages = function() { return lan };
});
