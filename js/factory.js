app.value("URL","https://raw.githubusercontent.com/neerajJoshi1212/Online-App/master/MENUS.json");
app.factory("myfactory",($http,$q,URL)=>{
	return {
		callServer(){
			var defered = $q.defer();
			$http.get(URL).then(function(data){
				defered.resolve(data);
			},function(err){
				defered.reject(err);
			})
			return defered.promise;
		}
	}
})