const render = require('./render')
const dateFormat = require('dateformat')

// render.myChart()
// console.log(render.dayPlot('Grayson', '1-4-2018'))
console.log(render.weeklyPlot('Grayson', 6))

const now = new Date()
console.log(now)
const date = dateFormat(now, "mm dd yyyy HH:MM")
const day = dateFormat(now, "m-d-yyyy")
const time = dateFormat(now, "HH:MM TT")
console.log('day ', day)
console.log('time ', time)
console.log(date)

