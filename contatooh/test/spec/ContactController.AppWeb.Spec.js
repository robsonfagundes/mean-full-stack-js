
describe('mean-full-stack-js - ContactController-AppWeb', function() {

	var $scope;

	beforeEach(function() {
		module('contatooh');
		inject(function($injector) {
			$scope = $injector.get('$rootScope').$new();
		});
	});

	it("TEST: Make a Contact empty when no parameter of route was send", 
		inject(function($controller) {
			$controller('ContactController', {'$scope' : $scope});
			expect($scope.contact._id).toBeUndefined();
		}
	));

});