'use strict'

const tabItem = document.querySelectorAll('.book-tab-item')
const tabContent = document.querySelectorAll('.book-content')

tabItem.forEach((item) => {
  item.addEventListener('click', HandleTab)
})

function HandleTab(item) {
  const tabTarget = item.currentTarget
  const target = tabTarget.dataset.tab

  tabItem.forEach((title) => {
    title.classList.remove('is-active')
  })

  tabContent.forEach((target) => {
    target.classList.remove('is-select')
  })

  document.querySelector('#' + target).classList.add('is-select')
  tabTarget.classList.add('is-active')
}
