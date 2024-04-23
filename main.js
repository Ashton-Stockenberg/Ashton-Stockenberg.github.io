const front = document.querySelector('#name-front')
const back = document.querySelector('#name-back')

document.addEventListener('mousemove', (data) => {
    const centerX = window.innerWidth/2
    const centerY = window.innerHeight/2

    const deltaX = centerX - data.clientX
    const deltaY = centerY - data.clientY

    back.style.left = `${deltaX/60}px`
    back.style.top = `${deltaY/60}px`

    front.style.left = `${-deltaX/60}px`
    front.style.top = `${-deltaY/60}px`
})