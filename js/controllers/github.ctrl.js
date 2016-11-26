app.controller('GithubController', function($scope, $http) {
  $http.get("https://api.github.com/users/johannvalenzuela/repos",{
    headers:  {
        'Accept': 'application/vnd.github.v3+json'
    }
}).then(function (response) {
    $scope.github = response.data;
    Materialize.toast('Repositorios cargados', 2000)
  })
}).directive('githubRepo', function() {
  return {
    templateUrl: 'js/templates/repo.html'
  };
});
