import $ from '../local_modules/jquery/dist/jquery.min'
import Swiper from "swiper"

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})

const menuButton = document.querySelector(`.header__menu-button`)
const nav = document.querySelector(`.header__nav`)
const header = document.querySelector(`.header`)
const body = document.querySelector(`body`)


function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight
}

function getBodyScrollTop() {
    // eslint-disable-next-line no-undef
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop)
}

nav.classList.add(`main-nav--closed`)

const openMenu = () => {
    nav.classList.remove(`main-nav--closed`)
    header.classList.add(`header--overlay`)

    if (existVerticalScroll()) {
        body.classList.add(`body-lock`)
        body.style.top = `-${body.dataset.scrollY}px`
    }
}
const closeMenu = () => {
    nav.classList.add(`main-nav--closed`)
    header.classList.remove(`header--overlay`)

    if (existVerticalScroll()) {
        body.classList.remove(`body-lock`)
        window.scrollTo(0, body.dataset.scrollY)
    }
}

menuButton.addEventListener(`click`, (e) => {
    if (nav.classList.contains(`main-nav--closed`)) {
        e.preventDefault()

        body.dataset.scrollY = getBodyScrollTop()
        openMenu()
    } else {
        e.preventDefault()
        closeMenu()
    }
})

// слайдер

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(`.swiper-container`, {
    pagination: {
        el: `.swiper-pagination`,
        type: `fraction`,
    },
    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },
})


// список вопросов

const questions = document.querySelectorAll(`.questions__question`)

questions.forEach((el) => {
    el.addEventListener(`click`, () => {
        if (el.classList.contains(`closed-question`)) {
            el.classList.remove(`closed-question`)
        } else {
            el.classList.add(`closed-question`)
        }
    })
})
