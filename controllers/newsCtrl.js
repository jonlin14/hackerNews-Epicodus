myApp.controller('newsCtrl', function newsCtrl($scope) {
    $scope.stories = [
        {
            name :'Obama wins presidency',
            vote : 0
        },
        {
            name :'Bp Oil Spill',
            vote : 0
        }
    ]
    $scope.addValue = function(item) {
        item.vote += 1;
    }
});
