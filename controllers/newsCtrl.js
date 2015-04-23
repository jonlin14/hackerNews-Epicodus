myApp.controller('newsCtrl', function newsCtrl($scope) {
    $scope.stories = {
        story : {
            name :'Obama wins presidency',
            vote : 0
        },
        story1 : {
            name :'Bp Oil Spill',
            vote : 0
        }
    }
    $scope.addValue = function(item) {
        item.vote += 1;
    }
});
