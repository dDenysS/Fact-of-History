import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})

const menuButton = document.querySelector(`.header__menu-button`)
const nav = document.querySelector(`.header__nav`)

nav.classList.add(`main-nav--closed`)

const openMenu = () => {
    nav.classList.remove(`main-nav--closed`)
}
const closeMenu = () => {
    nav.classList.add(`main-nav--closed`)
}

menuButton.addEventListener(`click`, () => {
    if (nav.classList.contains(`main-nav--closed`)) {
        openMenu()
    } else {
        closeMenu()
    }
})
