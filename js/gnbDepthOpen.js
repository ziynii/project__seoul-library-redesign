'use strict'

const item = document.querySelectorAll('.gnb-nav-item')

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('mouseover', () => {
    item[i].classList.add('is-open')
  })

  item[i].addEventListener('mouseout', () => {
    item[i].classList.remove('is-open')
  })
}
