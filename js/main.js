'use strict'

function onClickMenu() {
    const menu = document.querySelector('.main-navigation')
    const screen = document.querySelector('.main-screen')
    menu.classList.toggle('show')
    screen.classList.toggle('back-drop')
}

function onShowModal() {
    document.querySelector('dialog').showModal()
    document.querySelector('dialog').style.display = 'grid'
}

function onCloseModal() {
    document.querySelector('dialog').close()
    document.querySelector('dialog').style.display = 'none'

}