
describe('mean-full-stack-js - ContactController-Api', function() {

	var $scope, $httpBackend;

	beforeEach(function() {
		module('contatooh');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', 'contacts/1').respond({_id: '1'});
			$httpBackend.when('GET', 'contacts').respond([{}]);
		});
	});

	it("TEST: You must complete the contact when the route parameter is passed!", 
		inject(function($controller) {
		/*	$controller('ContactController', {
				'$routeParams' : {contactId : 1},
				'$scope' : $scope
			});
			$httpBackend.flush();
			expect($scope.contact._id).toBeDefined();
		*/	
		}
	));

});