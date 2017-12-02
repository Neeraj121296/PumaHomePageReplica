
app.controller("myctrl3",($scope,myfactory3)=>{
	$scope.brand = "Online Shop";
	var promise = myfactory3.callServer3();
	promise.then(function(result){
		$scope.videodata = result;
        console.log(result);
	},function(err){
		$scope.err = err;
	})
})
//app.value("url","https://raw.githubusercontent.com/neerajJoshi1212/Online-App/master/IMAGES.json");
app.factory("myfactory3",($http,$q,URL)=>{
	return {
		callServer3(){
			var defered = $q.defer();
			$http.get("https://raw.githubusercontent.com/neerajJoshi1212/Online-App/master/Video").then(function(result){
				defered.resolve(result);
			},function(err){
				defered.reject(err);
			})
			return defered.promise;
		}
	}
})