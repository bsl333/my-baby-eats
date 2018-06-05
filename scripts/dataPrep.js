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

// function prepareWeeklyData(babyName, startDate) {
//   const dailyBehavior = getDailyBehavior(babyName)
//   if (!dailyBehavior) return { error: 'ERROR' }
//   const startIdx = dailyBehavior.findIndex(val => val.date === startDate)
//   const weeklyBehavior = dailyBehavior.slice(startIdx, startIdx + 7)
//   const xAxis = []
//   const yAxis = []
//   weeklyBehavior.forEach(day => {
//     xAxis.push(day.date)
//     const formulaConsumed = day.foodIntake
//       .map(val => val.formulaQty)
//       .reduce((accum, val) => accum + val)
//     yAxis.push(formulaConsumed)
//   })
//   const title = `${xAxis[0].slice(0,5)} Thru ${xAxis.slice(-1)} Formula Consumption for ${babyName}`
//   const highchartsPlotObj = { xAxis, yAxis, title }
//   return highchartsPlotObj
// }

function prepareLastXDaysData (babyName, daysBack) {
  const dailyBehavior = getDailyBehavior(babyName)
  if (!dailyBehavior) return {error: 'ERROR getting dailyBehavior'}
  const weeklyBehavior = dailyBehavior.slice(-1 * daysBack)

  const xAxis = []
  const yAxis = []
  let solidFoods = []

  weeklyBehavior.forEach(day => {
    xAxis.push(day.date)
    const formulaConsumed = day.foodIntake
      .map(val => val.formulaQty)
      .reduce((accum, total) => accum + total)
    yAxis.push(formulaConsumed)
    const solidFoodsArr = day.foodIntake
      .map(val => val.solidFoods)
    // find unique solid foods and push onto solid food array
    solidFoodsArr.forEach(val => {
      val.forEach(food => 
        food ? (solidFoods.indexOf(food) === -1 ? solidFoods.push(food) : null) : null)
    })
  })
  const title = `${xAxis[0].split('-', 2).join('-')} Thru ${xAxis.slice(-1)} Formula Consumption for ${babyName}`

  return { xAxis, yAxis, title, solidFoods}

}

function getDailyBehavior(name) {
  const baby = data.find(val => val.name === name)
  return baby ? baby.dailyBehavior : null
}

function getFoodIntakeOnDate(babyName, date) {
  const dailyBehavior= getDailyBehavior(babyName)
  const foodIntake = dailyBehavior.find(val => val.date === date)
  return foodIntake ? foodIntake.foodIntake : null
}

function updateData(babyName, date, { foodIntake, mood, notes }) {
  const dailyBehavior = getDailyBehavior(babyName)
  let dayBehavior = dailyBehavior.find(val => val.date === date)
  if (dayBehavior) {
    dayBehavior.foodIntake.push(foodIntake)
  } else {
    dayBehavior = { date, 'foodIntake': [ foodIntake ], mood, notes  }  
    dailyBehavior.push(dayBehavior)
  }
}

module.exports = {
  prepareDailyData,
  // prepareWeeklyData,
  prepareLastXDaysData,
  updateData
}

