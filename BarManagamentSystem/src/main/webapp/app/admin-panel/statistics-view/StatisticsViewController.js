'use strict';

app.controller("StatisticsViewController", [ '$scope', 'StatisticsViewService', 
    function($scope, StatisticsViewService) {	
	
	$scope.getWaiterBillsStatistics = function() {
		StatisticsViewService.getWaiterBillsForLastWeek()
		.then((statisticsData) => {
			$scope.dataSource.data = statisticsData;
		})
		.catch((error) => {
			
		});
	}
	
	
	$scope.dataSource = {
		chart : {
			caption: 'Bills completed per user',
			theme: 'ocean'
		}
			
	};
	
} ]);
