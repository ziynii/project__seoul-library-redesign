'use strict'

const noticeTabItem = document.querySelectorAll('.notice-tab-item')
const noticeTabContent = document.querySelectorAll('.notice-content-wrapper')

noticeTabItem.forEach((item) => {
  item.addEventListener('click', HandleNoticeTab)
})

function HandleNoticeTab(item) {
  const noticeTabTarget = item.currentTarget
  const noticeTarget = noticeTabTarget.dataset.tab

  noticeTabItem.forEach((title) => {
    title.classList.remove('is-active')
  })

  noticeTabContent.forEach((target) => {
    target.classList.remove('is-select')
  })

  document.querySelector('#' + noticeTarget).classList.add('is-select')
  noticeTabTarget.classList.add('is-active')
}
