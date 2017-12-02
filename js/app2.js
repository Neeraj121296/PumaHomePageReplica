
app.controller("myctrl2",($scope,myfactory2)=>{
	$scope.brand = "Online Shop";
	var promise = myfactory2.callServer2();
	promise.then(function(result){
		$scope.imagedata = result;
        console.log(result);
	},function(err){
		$scope.err = err;
	})
})
//app.value("url","https://raw.githubusercontent.com/neerajJoshi1212/Online-App/master/IMAGES.json");
app.factory("myfactory2",($http,$q,URL)=>{
	return {
		callServer2(){
			var defered = $q.defer();
			$http.get("https://raw.githubusercontent.com/neerajJoshi1212/Online-App/master/GrpImages").then(function(result){
				defered.resolve(result);
			},function(err){
				defered.reject(err);
			})
			return defered.promise;
		}
	}
})