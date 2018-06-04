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

const dayPlot = (babyName, date='1-1-2018') => {
  const { xAxis, yAxis, title, error } = dataPrep.prepareDailyData(babyName, date)
  console.log(title)
  if (error) return 'BABY NOT FOUND!'
  Highcharts.chart('charts-container', {
    chart: {
      type: 'line'
    },
    title: {
      text: title
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      title: {
        start: 0,
        text: 'Formula Consumed (Oz)'
      }
    },
    series: [
      {
        name: babyName,
        data: yAxis
      }
    ]
  })
}

const weeklyPlot = (babyName, daysBack) => {
  const { 
    xAxis, 
    yAxis, 
    title, 
    error, 
    solidFoods 
  } = dataPrep.prepareLastXDaysData(babyName, daysBack)

  if (error) return 'BABY NOT FOUND!'
  Highcharts.chart('charts-container', {
    chart: {
      type: 'line'
    },
    title: {
      text: title
    },
    xAxis: {
      categories: xAxis
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Formula Consumed (Oz)'
      },
    },
    series: [
      {
        name: babyName,
        data: yAxis
      }
    ]
  })
}

  const updatePlot = (babyName, data, date) => {
    dataPrep.updateData(babyName, data, date)
    // weeklyPlot(babyName, 7)
    dayPlot(babyName, date)
  }





module.exports = {
  myChart,
  dayPlot,
  weeklyPlot,
  updatePlot
}