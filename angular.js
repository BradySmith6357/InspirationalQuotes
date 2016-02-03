angular.module("bigModule", []);

	angular.module("bigModule")
		.factory("quoteFactory", [function(){

		var quoteObject = [
		{
			name: "Oscar Wilde",
			img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Oscar-Wilde_(oval_cropped).png",
			text: "Patriotism is a virtue of the vicious"
		},
		{
			name: "Thomas Jefferson",
			img: "https://adamjg7.files.wordpress.com/2015/03/thomas_jefferson.jpg?w=584",
			text: "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants."
		},
		{
			name: "Oscar Wilde",
			img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Oscar-Wilde_(oval_cropped).png",
			text: "Always forgive your enemies; nothing annoys them so much"
		}
		]
		return {list: quoteObject}
	}]);

angular.module("bigModule")
	.controller("mainTroller", ["$scope", "quoteFactory", function($scope, quoteFactory){

	$scope.factoryObject = quoteFactory.list;

	$scope.addQuote = function(){
		$scope.factoryObject.push($scope.newQuote)
		$scope.newQuote = {}
	}
	
}]);