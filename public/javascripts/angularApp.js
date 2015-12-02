var app = angular.module('KOL', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: "/views/home.ejs",
				controller: 'kolCtrl',
				resolve: {
						patientPromise: ['patients', function(patients) {
							return patients.getAll();
						}]

					}
			})
			.state('details', {
				url: '/details/{id}',
				templateUrl: './views/details.ejs',
				controller: 'detailsCtrl',
				resolve: {						
					patient: ['$stateParams', 'patients', function($stateParams, patients) {
					return patients.get($stateParams.id);
						}]
					
			}
			});

			$urlRouterProvider.otherwise('home');
	}])
	.factory('patients', ['$http', function($http){
 		var object = {
  	 	patients: []               
                    
       };
       	object.get = function(id) {
       		return $http.get('/patients/' + id).then(function(res) {
       			return res.data;
       		});
       	};
       	object.getAll = function() {
       		return $http.get('/patients').success(function(data) {
       			angular.copy(data, object.patients);
       		});
       	}

       	object.create = function(patient) {
  		return $http.post('/patients', patient).success(function(data){
  	    	object.patients.push(data);
  		});
  	}

  	     object.delete = function(id) {
    return $http.delete('/patients/' + id).success(function(data){
    	console.log(data)
      object.getAll();
      // var index = o.posts.indexOf(data);
      // o.posts.splice(index, 1);
    });
  };
  	 object.update = function(patient) {
  	 	return $http.put('/patients/' + patient._id).success(function(data) {
				
				object.patients.push(data)
				console.log(data);

				
			});
  	 };
  



	
  		return object;
	}])
	.controller('kolCtrl', ['$scope', 'patients', 
		function($scope, patients){
			 
			  $scope.patients = patients.patients;
			  $scope.selectedItem = $scope.patients[0];

			  
              $scope.addPost = function() {
                if(!$scope.title || $scope.title === '') { return; }
                if(!$scope.age || $scope.age === '') { return; }
                patients.create({
                	name: $scope.title,
                	age: $scope.age,
                })
              
                $scope.title = '';
                $scope.age = '';
         
              };
             $scope.deletePatient = function(_id){
			console.log(_id)
      		patients.delete(_id);
   			};
            
	}])
	.controller('detailsCtrl', [
		'$scope',
		'$stateParams',
		'patients',
		'patient',
		function($scope, $stateParams, patients, patient){
		
				console.log(patient.name);
				console.log(patient._id);

				


		$scope.patient = patient;
		
				
		$scope.updatePatient = function(po){ 
				
	
				
				console.log(po)
				
			};
			
				

	}])


;
	
	
