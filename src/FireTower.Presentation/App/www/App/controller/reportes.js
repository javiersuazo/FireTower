angular.module('firetower')
    .controller('ReportesController', ['$scope', 'data', function($scope, data) {

        $scope.reportes = data.getAllReports();
/*        data.getAllReports()
            .success(function (data) {
                $scope.reportes = data;
            })
            .error(function(error) {
                alert(error);
            });*/
        $scope.takePicture = function () {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,
                destinationType: destinationType.DATA_URL
            });

            function onPhotoDataSuccess(imageData) {
                alert(imageData);
            }
            
            function onFail(message) {
                alert('Failed because: ' + message);
            }
        };
    }]);