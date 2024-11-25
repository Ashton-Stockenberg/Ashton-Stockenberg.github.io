// Call to action
{
    const start_time = Date.now()
    let sin_result = 0

    const front = document.querySelector('#name-front')
    const back = document.querySelector('#name-back')
    const logo = document.querySelector('#github-logo')
    
    let deltaX = 0
    let deltaY = 0

    document.addEventListener('mousemove', (data) => {
        const centerX = window.innerWidth/2
        const centerY = window.innerHeight/2

        deltaX = (centerX - data.clientX)/60
        deltaY = (centerY - data.clientY)/60

        back.style.left = `${deltaX}px`
        back.style.top = `${deltaY + sin_result}px`

        front.style.left = `${-deltaX}px`
        front.style.top = `${-deltaY + sin_result}px`
    })

    setInterval(() => {
        const running_time = Date.now() - start_time
        sin_result = Math.sin((running_time/500))*15

        back.style.top = `${deltaY + sin_result}px`
        front.style.top = `${-deltaY + sin_result}px`
        
    }, 10)
}