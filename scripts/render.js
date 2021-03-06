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

  if (error) {
    setDefaultChartContainer()
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
        text: 'Avg Formula Consumed (Oz)'
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
  // setLocalStorage(data)
  dayPlot(babyName, date)
}

const moodPlot = (babyName, daysBack, todaysDate) => {
  const {
    xAxis,
    yAxis,
    title,
    error
  } = dataPrep.prepareMoodData(babyName, daysBack, todaysDate)
  if (error) {
    setDefaultChartContainer()
  }
  Highcharts.chart('charts-container', {
    chart: {
      type: 'column'
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
        text: 'Percent of Occurences'
      },
    },
    plotOptions: {
      series: {
        colorByPoint: true
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

function polarFeedingPlot(babyName, daysBack) {
  dataPrep.preparePolarFeedingData(babyName, daysBack)

}

function setLocalStorage(date, babyObj) {
  const dataArrName = 'dataArr'
  const dailyBehaviorInLocalStorage = getLocalStorage(dataArrName)

  if (!dailyBehaviorInLocalStorage) {
    const dayBehavior = {
      date,
      'foodIntake': [babyObj.foodIntake],
      mood: babyObj.mood,
      notes: babyObj.notes
    }
    localStorage.setItem(dataArrName, JSON.stringify([dayBehavior]))
  } else {
    const newLocalStorageData = JSON.parse(dailyBehaviorInLocalStorage)
    let dayBehavior = newLocalStorageData.find(val => val.date === date)
    if (dayBehavior) {
      dayBehavior.foodIntake.push(babyObj.foodIntake)
      dayBehavior.notes += `\n${notes}`
    } else {
      dayBehavior = {
        date,
        'foodIntake': [babyObj.foodIntake],
        notes: babyObj.notes
      }
      newLocalStorageData.push(dayBehavior)
    }
    localStorage.setItem(dataArrName, JSON.stringify(newLocalStorageData))
  }
}

function getLocalStorage(dataArrName) {
  return localStorage.getItem(dataArrName)
}

function initiatePlotFromLocalStorage(babyName) {
  const dataArrName = 'dataArr'
  const dailyBehaviorInLocalStorage = getLocalStorage(dataArrName)

  if (dailyBehaviorInLocalStorage) {
    JSON.parse(dailyBehaviorInLocalStorage).forEach(val => {
      const dayBehavior = {
        'foodIntake': val.foodIntake,
        mood: val.mood,
        notes: val.notes
      }
      updatePlot(babyName, val.date, dayBehavior)
    })
  } else {
    setDefaultChartContainer()
  }
}

function updateAdditionalInfo(solidFoods, qtyConsumed, isAvg = false) {
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
    pText = isAvg ? `Avg forumla consumed` : 'Quantity of formula consumed'
    p.textContent = `${pText} ${qtyConsumed.toFixed(2)} Oz`
  }
}

function setDefaultChartContainer() {
  const h2 = document.createElement('h2')
  h2.textContent = `Please fill in behavior information below to create today's plot`
  h2.style.fontFamily = 'Lobster'
  const chartsContainer = document.getElementById('charts-container')
  chartsContainer.innerHTML = ''
  chartsContainer.appendChild(h2)
  chartsContainer.className = 'text-center'
}

function clearFormInputs(time) {
  document.getElementById('time').value = time
  document.getElementById('qty-consumed').value = null
  document.getElementById('solids-consumed').value = ''
  Array.from(document.getElementById('radio-buttons').children).forEach(btn => {
    btn.classList.remove('active')
    btn.style.color = 'black'
  })
  document.getElementById('notes').value = ''

  // document.getElementById('')
}



module.exports = {
  dayPlot,
  weeklyPlot,
  updatePlot,
  moodPlot,
  polarFeedingPlot,
  setLocalStorage,
  initiatePlotFromLocalStorage,
  clearFormInputs
}