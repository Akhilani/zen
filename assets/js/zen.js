/**
 * Zen app
 * @class zenApp
 */
var app = angular.module("zenApp", []);
/**
 *Zen Controller
 * @class zenCtrl
 * @memberOf zenApp
 * @param  {object} $http    {@link http://docs.angularjs.org/api/ng.$http}
 * @param (object) $scope
 */
app.controller("zenCtrl", function($scope, $http) {


    /**
     * Check if passed variable if undefined
     * @function notUndefined
     * @memberOf zenCtrl
     * @param x
     * @returns {boolean}
     */
    $scope.notUndefined = function (x) {
        return (typeof x !== 'undefined');
    }

});