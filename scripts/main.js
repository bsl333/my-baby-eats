const render = require('./render')
const dateFormat = require('dateformat')
const convertTime = require('convert-time')
const babyName = 'Grayson'

// console.log(render.dayPlot('Grayson', '5-27-2018'))

const buttons = Array.from(document.querySelectorAll('.btn-outline-primary'))
const form = document.getElementById('user-input')
const radioBtns = Array.from(document.querySelectorAll('.radio-group'))
const moodBtn = document.getElementById('mood-plot')
const now = new Date()
const dateFormatted = dateFormat(now, 'm-d-yyyy')
const timeFormatted = dateFormat(now, 'HH:MM')
let daysBack = 1
document.querySelector('#time').value = timeFormatted

// render.dayPlot(babyName, dateFormatted)
render.initiatePlotFromLocalStorage(babyName)


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    daysBack = +btn.textContent.trim().split(' ')[0]
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
  const date = dateFormat(now, 'm-d-yyyy')
  let time = convertTime(event.target.time.value).toUpperCase()
  console.log('time', time)
   
  const mood = event.target.mood.value
  const formulaQty = +event.target['qty-consumed'].value
  const solidFoods = event.target['solids-consumed'].value.split(',')
  const notes = event.target.notes.value
  const babyBehaviorObj = {
    foodIntake: {
      time, 
      formulaQty,
      solidFoods,
      mood
    },
    notes
  }
  render.setLocalStorage(date, babyBehaviorObj)
  render.updatePlot(babyName, date, babyBehaviorObj)

  // simulate a click event to not have to rewrite my click event
  var simulateClick = function (elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
  };
  const oneDay = document.querySelector('#one-day')
  simulateClick(oneDay)
  
  
})

radioBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    radioBtns.forEach(btn => btn.style.color = 'black')
    btn.style.color = 'pink'
  })
})

moodBtn.addEventListener('click', (event) => {
  // call render function to call mood plot be generated
  moodBtn.classList.add('active')
  render.moodPlot(babyName, daysBack)
})



