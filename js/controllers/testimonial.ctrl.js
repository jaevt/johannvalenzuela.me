app.controller('TestimonialController', function($scope, $http) {
  $http.get("http://localhost:3030/testimonial").then(function (response) {
    $scope.testimonials = response.data;

    console.log($scope.testimonials);
    Materialize.toast('Testimonios cargados', 2000) // 4000 is the duration of the toast;
  })
});
