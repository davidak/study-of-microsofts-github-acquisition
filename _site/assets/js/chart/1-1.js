var responses = 209;
var series = [['Project Manager/Project Leader', 41],
['Core contributor', 52],
['Casual contributor', 129],
['User', 5],
['administrator, integrator', 1],
['Tester', 1],
['I use it for my own computing/donate to projects who develop my distro.',1],
['Third party software developer',1],
['Independent open source developer', 1]]


var chart11 = new Highcharts.chart('1-1', {
		chart: {
				type: 'bar'
		},
		title: {
				text: 'Which of the roles best describe your main activities within the Linux (distributions or kernel) or BSD?'
		},
		// subtitle: {
		//     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
		// },
		xAxis: {
				type: 'category',
				labels: {
						// rotation: -45,
						style: {
								fontSize: '12px',
								fontFamily: 'Verdana, sans-serif'
						}
				}
		},
		yAxis: {
				min: 0,
				title: {
						text: 'Responses'
				}
		},
		legend: {
				enabled: false
		},
		tooltip: {
				pointFormat: '{point.y}'
		},
		series: [{
				name: 'Population',
				data: [
						['Project Manager/Project Leader', 41],
						['Core contributor', 52],
						['Casual contributor', 129],
						['User', 5],
						['administrator, integrator', 1],
						['Tester', 1],
						['I use it for my own computing/donate to projects who develop my distro.',1],
						['Third party software developer',1],
						['Independent open source developer', 1],
				],
				dataLabels: {
						enabled: true,
						// rotation: -90,
						color: '#FFFFFF',
						align: 'right',
						formatter: function() {
								var percent =  100*series[this.x][1]/responses;
								return series[this.x][1] + '  (' + Highcharts.numberFormat(percent, 1) + '%)'
						},
						style: {
								fontSize: '13px',
								fontFamily: 'Helvetica',
								// textOutline: '1px'
						}
				}
		}]
});