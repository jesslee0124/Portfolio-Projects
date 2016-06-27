app.directive('movieListing', function() {
	return {
    restrict: 'E',
    scope: {
      listing: '='
    },
    templateUrl: 'js/directives/movieListing.html'
  };  
});