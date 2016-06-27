app.controller('MainController', ['$scope', function($scope) {
   $scope.movies = 
   { 
    title: "The Avengers", 
    title_img: "img/the-avengers.jpg",
    img_alt: "The Avengers",
    genre: "Fantasy/Science fiction", 
    director: "Joss Whedon", 
    starring: "Chris Evans, Jeremy Renner, Robert Downey Jr., Scarlett Johansson",
    rating: 8.1,
    date: "20120504T02:03:00",
    description: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's \"dream team\" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner)."
  },
  { 
    title: "Harry Potter and the Deathly Hallows – Part 2", 
    title_img: "img/harry-potter.jpg",
    img_alt: "Harry Potter and the Deathly Hallows – Part 2",
    genre: "Fantasy/Drama", 
    director: "David Yates", 
    starring: "Daniel Radcliffe, Rupert Grint, Emma Watson, Helena Bonham Carter, Robbie Coltrane, Warwick Davis, Ralph Fiennes, Michael Gambon, John Hurt, Jason Isaacs, Gary Oldman, Alan Rickman, Maggie Smith, David Thewlis, Julie Walters",
    rating: 8.1,
    date: "20110707T02:10:00",
    description: "A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match."
  }
}]);