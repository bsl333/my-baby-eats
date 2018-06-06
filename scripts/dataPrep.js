const data = require('./data')
const convertTime = require('convert-time')

function prepareDailyData(babyName, date) {
  const xAxis = []
  const yAxis = []
  let solidFoods = []
  const title = `${date} Formula Consumption for ${babyName}`
  const dailyBehavior = getDailyBehavior(babyName)

  if (!dailyBehavior) return { error: 'ERROR' }
  const foodIntake = getFoodIntakeOnDate(babyName, date)
  if (!foodIntake){
    return { xAxis, yAxis, title, qtyConsumed: 0 , error: 'ERROR no Food Intake for today' }
  }
  // Sort array to acct for user input
  foodIntake.sort((a, b) => {
    const x = convertTime(a.time.toUpperCase())
    const y = convertTime(b.time.toUpperCase())
    if (x < y) return -1
    if (x > y) return 1
    return 0
  })

  foodIntake.forEach(foodObj => {
    xAxis.push(foodObj.time)
    yAxis.push(foodObj.formulaQty)
    foodObj.solidFoods.map(val => {
      val ? (solidFoods.indexOf(val) === -1 ? solidFoods.push(val) : null): null
    })
  })
  
  const qtyConsumed = yAxis.reduce((accum, val) => accum + val)
  const highchartsPlotObj = { xAxis, yAxis, title, solidFoods, qtyConsumed }
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
  const title = `${xAxis[0].split('-', 2).join('-')} Thru ${xAxis.slice(-1)[0]} Formula Consumption for ${babyName}`
  const avgQtyConsumed = yAxis.reduce((accum, val) => accum + val) / yAxis.length
  return { xAxis, yAxis, title, solidFoods, avgQtyConsumed } 

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
    dayBehavior.notes += `\n${notes}`
  } else {
    dayBehavior = { 
      date,
      'foodIntake': Array.isArray(foodIntake) ? foodIntake : [ foodIntake ],
      mood,
      notes  
    }  
    dailyBehavior.push(dayBehavior)
  }
}

module.exports = {
  prepareDailyData,
  prepareLastXDaysData,
  updateData
}

