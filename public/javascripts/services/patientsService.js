angular.module('KOL').service('patients', ['$http', function($http){
 		var object = {
  	 	patients: []
  	 	
       }

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
    	
      object.getAll();
    
    });
    
  };
  	 object.update = function(patient) {
  			console.log(patient)
  			var updateData = patient;
  	 	return $http.put('/patients/' + patient.id, patient).success(function(data) {

        patient.ipadid = updateData.ipadid;				
				patient.name = updateData.name;
        patient.surname = updateData.surname;
				patient.age = updateData.age;
        patient.kolcategory = updateData.kolcategory;
        patient.video = updateData.video;
        patient.patientjournal = updateData.patientjournal;
        patient.additionalinfo = updateData.additionalinfo;
				});
  	 };
  return object;
	}]);