'use strict'

function onClickMenu() {
    const menu = document.querySelector('.main-navigation')
    const screen = document.querySelector('.main-screen')
    menu.classList.toggle('show')
    screen.classList.toggle('back-drop')
}