angular.module('starter.controllers',[])
    .controller('ReportesController', ['$scope', 'data', function ($scope, data) {
        $scope.reportes = data.obtener_reportes();
        $scope.myPictures = [];
        $scope.$watch('myPicture', function (value) {
            if (value) {
                myPictures.push(value);
            }
        }, true);
}]);