 var app = angular.module('KOL', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('velkommen', {
				url: '/velkommen',
				templateUrl: '/views/welcome.ejs',

			})
			.state('opretpatient', {
				url: '/opretpatient',
				templateUrl: "/views/opretpatient.ejs",
				controller: 'kolCtrl',
				resolve: {
						patientPromise: ['patients', function(patients) {
							return patients.getAll();
						}]

					}
			})
			.state('redigerOversigt', {
				url: '/redigerOversigt',
				templateUrl: '/views/redigeroversigt.ejs',
				controller: 'kolCtrl',
				resolve: {
						patientPromise: ['patients', function(patients) {
							return patients.getAll();
						}]

					}
			})
			.state('rediger', {
				url: '/rediger/{id}',
				templateUrl: '/views/rediger.ejs',
				controller: 'redigerCtrl',
				resolve: {						
					patient: ['$stateParams', 'patients', function($stateParams, patients) {
					return patients.get($stateParams.id);
						}]
					
			}
			})
			.state('evaluering', {
				url: '/evaluering',
				templateUrl: '/views/evaluering.ejs',
				controller: 'kolCtrl',
				resolve: {
						patientPromise: ['patients', function(patients) {
							return patients.getAll();
						}]

					}
			})
			.state('patientside', {
				url: '/patientSide/{id}',
				templateUrl: '/views/patientSide.ejs',
				controller: 'redigerCtrl',
				resolve: {						
					patient: ['$stateParams', 'patients', function($stateParams, patients) {
					return patients.get($stateParams.id);
						}]
				}
			});



			$urlRouterProvider.otherwise('velkommen');
	}]);
	
	
	
