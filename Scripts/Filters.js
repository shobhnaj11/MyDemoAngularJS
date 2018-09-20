/// reference path="angular.min.js"/>

var app = angular.module("myModule", []);
          app.controller("myController", function($scope) {
                    var employees = [
                        { name: "Ben", dateOfBirth: new Date("November 23, 1982") , gender: "Male" , salary: 55000.788},
                        { name: "Shobhna", dateOfBirth: new Date("November 11, 1994") , gender: "Female" , salary: 68000 },
                        { name: "Mark", dateOfBirth: new Date("March 3, 1991") , gender: "Male", salary: 57000},
                        { name: "Tod", dateOfBirth: new Date("August 4, 1997") , gender: "Male", salary: 53000},
                        { name: "Pam", dateOfBirth: new Date("September 10,1980") , gender: "Female", salary: 60000 },                     
                    ];  
                    $scope.employees = employees;
                }); 