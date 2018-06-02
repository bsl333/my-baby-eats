const data = require('./data')

function prepareDailyData(babyName, date) {
  const dailyBehavior = getDailyBehavior(babyName)
  console.log(dailyBehavior)
  let foodIntake = []
  for (let behavior of dailyBehavior) {
    if (date === behavior.date) {
      foodIntake = behavior.foodIntake
      break
    }
  }
  console.log(foodIntake)
  const xAxis = []
  for (let stats of foodIntake) {
    console.log(stats)
  } 
}

function getDailyBehavior(name) {
  for(obj of data) {
    if (obj.name.toUpperCase() === name.toUpperCase()) return obj.dailyBehavior
  }

  return null
}

module.exports = {
  prepareDailyData
}