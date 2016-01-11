angular.module('KOL').controller('redigerCtrl', [
		'$scope',
		'$stateParams',
		'$state',
		'patients',
		'patient',
		function($scope, $stateParams, $state, patients, patient){

				$scope.patients = patients.patients;
		
				$scope.patient = patient;

		$scope.updatePatient = function(patient){ 
				
			
				patients.update({
				  id: $scope.patient._id,
				  ipadid: $scope.patient.ipadid,
                  name: $scope.patient.name,
                  surname: $scope.patient.surname,
                  age: $scope.patient.age,
                  kolcategory: $scope.patient.kolcategory,
                  video: $scope.patient.video,
                  patientjournal: $scope.patient.patientjournal,
                  additionalinfo: $scope.patient.additionalinfo,
				})

				$state.go('redigerOversigt')
				
			};
			
				

	}])