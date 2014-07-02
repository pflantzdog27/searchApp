angular.module('subcontractorsApp.controllers', [])
    .controller('resultsController',function($scope, subcontractorsAPIservice) {
        $scope.search = null;
        $scope.contracts = [];

        // more items (pagination)
        count = 2000;
        while(count) {
            $scope.contracts[count]  = count--;
        }
        $scope.totalDisplayed = 20;
        $scope.loadMore = function () {
            $scope.totalDisplayed += 100;
        };

        // sorting
        $scope.sortOrder = null;

        //init function
        init();
        function init() {
            $scope.contracts = subcontractorsAPIservice.getContracts();
        }

        //
        $scope.exportData = function () {
            var blob = new Blob([document.getElementById('table-test').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "subContractors.xls");
        };


    })

//fake data

