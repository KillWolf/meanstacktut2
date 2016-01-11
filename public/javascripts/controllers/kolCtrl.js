angular.module('KOL').controller('kolCtrl', ['$scope', 'patients', '$state',
		function($scope, patients, $state){
			  $scope.patients = patients.patients;
			  
        
        $scope.addPatient = function() {
                if(!$scope.title || $scope.title === '') { return; }
                if(!$scope.age || $scope.age === '') { return; }
                if(!$scope.ipadid || $scope.ipadid === '') { return; }
                if(!$scope.surname || $scope.surname === '') { return; }
                if(!$scope.kolcategory || $scope.kolcatory === '') { return; }

                  patients.create({
                  ipadid: $scope.ipadid,
                  name: $scope.title,
                  surname: $scope.surname,
                  age: $scope.age,
                  kolcategory: $scope.kolcategory,
                  video: $scope.video,
                  patientjournal: $scope.patientjournal,
                  additionalinfo: $scope.extrainfo,
                })

                $state.go('evaluering') 
         
              };

            $scope.deletePatient = function(_id){
	
      		patients.delete(_id);
   			};
            
	}])