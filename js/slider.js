const sliderView = document.querySelector('.slider__view')
const sliderBtns = document.querySelectorAll('.slider__btn')

var left = 0

function toSlide(n) {
    left = -100 * (n - 1)
    for (var i = 0; i < sliderBtns.length; i++) {
        if (i === n - 1) {
            sliderBtns[i].classList.add('active')
        }
        else {
            sliderBtns[i].classList.remove('active')
        }
    }
    sliderView.style.transform = `translate(${left}vw, 0)`
}