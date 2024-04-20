let date = new Date()
const goPrevBtn = document.querySelector('.go-prev')
const goTodayBtn = document.querySelector('.go-today')
const goNextBtn = document.querySelector('.go-next')

function renderCalendar() {
  const viewYear = date.getFullYear()
  const viewMonth = date.getMonth()

  const yearMonth = document.querySelector('.calendar-year-month')
  yearMonth.textContent = `${viewYear}년 ${viewMonth + 1}월`

  const prevLast = new Date(viewYear, viewMonth, 0)
  const thisLast = new Date(viewYear, viewMonth + 1, 0)

  const prevLastDate = prevLast.getDate()
  const prevLastDay = prevLast.getDay()

  const thisLastDate = thisLast.getDate()
  const thisLastDay = thisLast.getDay()

  const prevDates = []
  const thisDates = [...Array(thisLastDate + 1).keys()].slice(1)
  const nextDates = []

  if (prevLastDay !== 6) {
    for (let i = 0; i < prevLastDay + 1; i++) {
      prevDates.unshift(prevLastDate - i)
    }
  }

  for (let i = 1; i < 7 - thisLastDay; i++) {
    nextDates.push(i)
  }

  const CalendarDates = prevDates.concat(thisDates, nextDates)

  const firstDateIndex = CalendarDates.indexOf(1)
  const lastDateIndex = CalendarDates.lastIndexOf(thisLastDate)

  CalendarDates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other'
    CalendarDates[
      i
    ] = `<div class="calendar-date"><span class="${condition}">${date}<span></div>`
  })

  document.querySelector('.calendar-dates').innerHTML = CalendarDates.join('')
  const today = new Date()
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.style.color = 'black'
        date.style.fontWeight = 'bold'
        break
      }
    }
  }
}

renderCalendar()

function prevMonth() {
  date.setMonth(date.getMonth() - 1)
  renderCalendar()
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1)
  renderCalendar()
}

function goToday() {
  date = new Date()
  renderCalendar()
}

goPrevBtn.addEventListener('click', prevMonth)
goTodayBtn.addEventListener('click', goToday)
goNextBtn.addEventListener('click', nextMonth)
