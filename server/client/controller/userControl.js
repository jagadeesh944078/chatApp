
app.controller('userControl', function ($scope, userServices) {

    $scope.register = function () {
        var user = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password,
           

        }
        console.log("registeruser", user);
        userServices.registerUser(user, $scope);
    
    }

    $scope.login = function () {
        var data = {
            'username': $scope.username,
            'password': $scope.password
        }
        userServices.login(data, $scope);
    }

})