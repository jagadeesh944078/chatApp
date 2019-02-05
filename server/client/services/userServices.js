app.service('userServices', function ($http, $location) {

this.registerUser= function (data, $scope) {
   // console.log("data on services 4----", data);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/registration',
            data: data

        }).then(
            function successCallback(response) {
               // debugger;
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            function errorCallback(response) {

                console.log("register Unsuccessfull ",response);
            // $scope.message =response.data.message.message;


            }
        );
    }

   this.login=function(data,$scope){
       console.log(data);
$http({
    method:'POST',
    url:'http://localhost:3000/login',
    data:data
}).then(
    function successCallback(response){
        console.log("register successful");
        console.log(response);
        $scope.message="register successful"
        $location.path('./dashboard')
    },
    function errorCallback(response){
        console.log("register unsuccessful",response);
       // $scope.message =response.data.message.message;


    }
);
   }

})