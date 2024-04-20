'use strict'

const menuBtn = document.querySelector('.header-menu')
const closeBtn = document.querySelector('.side-menu .close-button')
const sideBar = document.querySelector('.side-menu')
const menuTab = document.querySelectorAll('.side-menu-item')
const depthTab = document.querySelectorAll('.side-depth-detail')
const depthTitle = document.querySelectorAll('.side-depth-title')
const overlay = document.querySelector('.overlay')

function openSidebar() {
  sideBar.classList.add('is-active')
  overlay.classList.add('is-active')
}

function closeSidebar() {
  sideBar.classList.remove('is-active')
  overlay.classList.remove('is-active')
  depthTab.forEach((depth) => {
    depth.classList.remove('is-open')
  })
}

menuBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
overlay.addEventListener('click', closeSidebar)

for (let i = 0; i < menuTab.length; i++) {
  menuTab[i].addEventListener('click', (e) => {
    for (let j = 0; j < menuTab.length; j++) {
      menuTab[j].classList.remove('is-select')

      e.currentTarget.classList.add('is-select')
    }
  })
}

for (let i = 0; i < depthTitle.length; i++) {
  depthTitle[i].addEventListener('click', (e) => {
    e.preventDefault()

    const target = e.currentTarget.parentNode

    for (let j = 0; j < depthTab.length; j++) {
      target.classList.toggle('is-open')
    }
  })
}
