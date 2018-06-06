const Highcharts = require('highcharts')
// const babyData = require('./data')
const dataPrep = require('./dataPrep')
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts)

const dayPlot = (babyName, date) => {
  const { 
    xAxis,
    yAxis,
    title,
    qtyConsumed,
    solidFoods,
    error 
  } = dataPrep.prepareDailyData(babyName, date)
  console.log(solidFoods)
  if (error) {
    const h2 = document.createElement('h2')
    h2.textContent = `Please enter data below to render today's plot`
    const chartsContainer = document.getElementById('charts-container')
    chartsContainer.innerHTML = ''
    chartsContainer.appendChild(h2)
    chartsContainer.className = 'text-center'
    updateAdditionalInfo()
    return
  }
  updateAdditionalInfo(solidFoods, qtyConsumed)
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
    solidFoods,
    avgQtyConsumed 
  } = dataPrep.prepareLastXDaysData(babyName, daysBack)

  updateAdditionalInfo(solidFoods, avgQtyConsumed, true)

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

  const updatePlot = (babyName, date, data) => {
    dataPrep.updateData(babyName, date, data)
    // weeklyPlot(babyName, 7)
    dayPlot(babyName, date)
  }

  function updateAdditionalInfo(solidFoods, qtyConsumed, isAvg=false) {
    const ul = document.querySelector('ul')
    const h6 = document.getElementById('solid-food-title')
    const p = document.getElementById('qty-consumed-avg')
    ul.innerHTML = ''
    h6.textContent = ''
    p.textContent = ''
    if (solidFoods) {
      h6.textContent = 'Solid Foods Eaten'
      solidFoods.forEach(food => {
        const li = document.createElement('li')
        li.textContent = food
        ul.appendChild(li)
      })
      p.textContent = `${isAvg ? 'Avg consumed: ': 'Quantity consumed today:'} ${qtyConsumed.toFixed(2)} Oz`
    }

  }





module.exports = {
  dayPlot,
  weeklyPlot,
  updatePlot
}