const Highcharts = require('highcharts')
// const babyData = require('./data')
const dataPrep = require('./dataPrep')
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts)

const myChart = () => {
  Highcharts.chart('container', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Mango', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  })
}

const dayPlot = (babyName, date) => {
  const dayData = dataPrep.prepareDailyData(babyName, date)
}

function test() {
  return 'hi'
}

module.exports = {
  test,
  myChart,
  dayPlot
}