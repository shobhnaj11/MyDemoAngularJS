/// reference path="angular.min.js"/>

var app = angular.module("myModule", []);
           app.controller("myController", function($scope) {
                    var employees = [
                        { name: "Ben",  gender: "Male" , salary: 55000.788, city:"London"},
                        { name: "Sara",  gender: "Female" , salary: 68000, city: "Chennai"},
                        { name: "Mark", gender: "Male", salary: 57000, city: "London"},
                        { name: "Tod", gender: "Male", salary: 53000, city:"Chennai"},
                        { name: "Pam", gender: "Female", salary: 60000 },                     
                    ];  
                    $scope.employees = employees;
                });