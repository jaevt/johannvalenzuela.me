app.controller('CertificateController', function($scope, $http) {
  $http.get("http://localhost:3030/certificates").then(function (response) {
    $scope.certificates = response.data;

    console.log($scope.certificates);
    Materialize.toast('Certificados cargados', 2000) // 4000 is the duration of the toast;
  })
});
