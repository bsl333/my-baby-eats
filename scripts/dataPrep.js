const data = require('./data')

function prepareDailyData(babyName, date) {
  const dailyBehavior = getDailyBehavior(babyName)
  const foodIntake = getFoodIntakeOnDate(babyName, date)
  const xAxis = []
  const yAxis = []
  const title = `${date} Formula Consumption for ${babyName}`
  foodIntake.forEach(foodObj => {
    xAxis.push(foodObj.time)
    yAxis.push(foodObj.formulaQty)
  })
  const highchartsPlotObj = { xAxis, yAxis, title }
  return highchartsPlotObj
}

function getDailyBehavior(name) {
  // for (obj of data) {
  //   if (obj.name.toUpperCase() === name.toUpperCase()) return obj.dailyBehavior
  // }
  // return null

    // return data
  //   .filter(obj => 
  //     obj.name.toLocaleUpperCase() === name.toLocaleUpperCase())[0].dailyBehavior

  const baby = data.find(val => val.name === name)
  return baby ? baby.dailyBehavior : null
}

module.exports = {
  prepareDailyData
}

function getFoodIntakeOnDate(babyName, date) {
  const dailyBehavior= getDailyBehavior(babyName)
  const foodIntake = dailyBehavior.find(val => val.date === date)
  return foodIntake ? foodIntake.foodIntake : null
}