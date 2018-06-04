const render = require('./render')
const dateFormat = require('dateformat')
const babyName = 'Grayson'

// render.myChart()
console.log(render.dayPlot('Grayson', '5-27-2018'))
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
const form = document.getElementById('user-input')
const radioBtns = Array.from(document.querySelectorAll('.radio-group'))

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const daysBack = +btn.textContent.trim().split(' ')[0]
    const date = dateFormat(new Date(), 'm-d-yyyy')
    daysBack > 1 ? render.weeklyPlot(babyName, daysBack) :
      render.dayPlot(babyName, date)
    buttons.forEach(btn => {
      btn.classList.remove('active')
    })
    btn.classList.add('active')
  })
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const now = new Date()
  const date = dateFormat(now, 'm-d-yyyy')
  const time = dateFormat(now, 'h:MM TT')
  
  const mood = event.target.mood.value
  const formulaQty = +event.target['qty-consumed'].value
  const solidFoods = event.target['solids-consumed'].value.split(',')
  const notes = event.target.notes.textContent
  const dataObj = { 
    foodIntake: {
      time, 
      formulaQty,
      solidFoods
    },
    mood,
    notes
  }
  render.updatePlot(babyName, dataObj, date)
})

radioBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    radioBtns.forEach(btn => btn.style.color = 'black')
    btn.style.color = 'pink'
  })
})




