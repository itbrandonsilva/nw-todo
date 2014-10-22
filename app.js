angular.module("app", [])
    .controller("AppController", function ($scope) {
        
        $scope.categories = {
            "My Category": ["Item one.", "Item two."]
        };

        $scope.restore = function () {};

        console.log("AppController()");
        $scope.exit = function () {
            window.close();
        };

        $scope.addCategory = function (name) {
            if ( ! $scope.categories[name] ) $scope.categories[name] = [];
        };

        $scope.removeCategory = function (name) {
            delete $scope.categories[name];
        };

        $scope.addItem = function (category, text) {
            var category = $scope.categories[category];
            if ( ! category ) return;
            var index = category.indexOf(text);
            if (index == -1) category.push(text);
        };

        $scope.removeItem = function (category, text) {
            var category = $scope.categories[category];
            if ( ! category ) return;
            var index = category.indexOf(text);
            if (index > -1) category.splice(index, 1);
        };
    })
;
