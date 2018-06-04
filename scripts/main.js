const render = require('./render')
const dateFormat = require('dateformat')
const babyName = 'Grayson'

// render.myChart()
console.log(render.dayPlot('Grayson', '1-4-2018'))
// console.log(render.weeklyPlot(babyName, 7))

// const now = new Date()
// console.log(now)
// const date = dateFormat(now, "mm dd yyyy HH:MM")
// const day = dateFormat(now, "m-d-yyyy")
// const time = dateFormat(now, "HH:MM TT")
// console.log('day ', day)
// console.log('time ', time)
// console.log(date)

const buttons = Array.from(document.querySelectorAll('.btn-outline-primary'))

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const daysBack = +btn.textContent.trim().split(' ')[0]
    console.log(daysBack > 1)
    daysBack > 1 ? render.weeklyPlot(babyName, daysBack) :
      render.dayPlot(babyName, '1-4-2018')
    render.weeklyPlot(babyName, daysBack) 
    buttons.forEach(btn => {
      btn.removeAttribute('hidden')
    })
    btn.setAttribute('hidden', '')
  })
})


