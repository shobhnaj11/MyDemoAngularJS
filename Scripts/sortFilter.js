// to sort data in angular  use the orderBy filter 
//   {{orderBy_expression | orderBy: expression : reverse}}
//Example as follows  : ng-repeat="employee in employees | orderBy: 'salary': false"
//to sort in ascendng(+) , set reverse parameter to false
//to sort in descending(-o) order, set reverse parameter to true
// +salary means acending // -salary means descending 


var app = angular.module("myModule", [])
                .controller("myController", function($scope){
                    var employees = [
                        { name: "Ben", dateOfBirth: new Date("November 23, 1982") , gender: "Male" , salary: 55000.788},
                        { name: "Shobhna", dateOfBirth: new Date("November 11, 1994") , gender: "Female" , salary: 68000 },
                        { name: "Mark", dateOfBirth: new Date("March 3, 1991") , gender: "Male", salary: 57000},
                        { name: "Tod", dateOfBirth: new Date("August 4, 1997") , gender: "Male", salary: 53000},
                        { name: "Pam", dateOfBirth: new Date("September 10,1980") , gender: "Female", salary: 60000 },     
                    ];
                    $scope.employees = employees;
                    $scope.sortColumn = "name";

                });
 

