const data = require('./data')

function prepareDailyData(babyName, date) {
  const dailyBehavior = getDailyBehavior(babyName)
  if (!dailyBehavior) return { error: 'ERROR' }
  const foodIntake = getFoodIntakeOnDate(babyName, date)
  const xAxis = []
  const yAxis = []
  const title = `${date} Formula Consumption for ${babyName}`
  foodIntake.forEach(foodObj => {
    xAxis.push(foodObj.time)
    yAxis.push(foodObj.formulaQty)
  })
  const qtyConsumed = yAxis.reduce((accum, val) => accum + val)
  const highchartsPlotObj = { xAxis, yAxis, title, qtyConsumed }
  return highchartsPlotObj
}

function prepareWeeklyData(babyName, startDate) {
  const dailyBehavior = getDailyBehavior(babyName)
  if (!dailyBehavior) return { error: 'ERROR' }
  const startIdx = dailyBehavior.findIndex(val => val.date === startDate)
  const weeklyBehavior = dailyBehavior.slice(startIdx, startIdx + 7)
  const xAxis = []
  const yAxis = []
  weeklyBehavior.forEach(day => {
    xAxis.push(day.date)
    const formulaConsumed = day.foodIntake
      .map(val => val.formulaQty)
      .reduce((accum, val) => accum + val)
    yAxis.push(formulaConsumed)
  })
  const title = `${xAxis[0].slice(0,5)} Thru ${xAxis.slice(-1)} Formula Consumption for ${babyName}`
  console.log(xAxis, yAxis, title)
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

function getFoodIntakeOnDate(babyName, date) {
  const dailyBehavior= getDailyBehavior(babyName)
  const foodIntake = dailyBehavior.find(val => val.date === date)
  return foodIntake ? foodIntake.foodIntake : null
}



module.exports = {
  prepareDailyData,
  prepareWeeklyData
}

