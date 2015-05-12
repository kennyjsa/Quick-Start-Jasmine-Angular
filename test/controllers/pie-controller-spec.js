describe('PieController', function(){
	var $rootScope,
		$scope,
		controller;

	var teste;

	beforeEach(function(){
		module('pie');

		inject(function($injector){
			teste = 'aa';
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')('PieController', {$scope:$scope});
		});
	});

	describe('Action Handlers', function(){
		describe('eatSlice', function(){

			it('Shold decrement the number of slices', function(){
				//expect(teste).toEqual('aa');
				
				expect($scope.slices).toEqual(8);
				$scope.eatSlice();
				expect($scope.slices).toEqual(7);
			});
		});
	});
});