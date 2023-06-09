let screen = document.querySelector('#output')
let numbers = document.querySelectorAll(".btn-primary, .btn-secondary")
var cal = ''
var display = ''
var operator = ''

Array.from(numbers).forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if(e.target.innerText === 'AC'){
            screen.innerText = '0'
            cal = ''
            display = ''
        }
        else if(e.target.innerText === '='){
            console.log(cal)
            screen.innerText = eval(cal)
            cal = screen.innerText
            display = screen.innerText
        }
        else{
            cal = cal + (e.target.className === 'btn-primary'? e.target.innerText : e.target.value)
        
            if (e.target.className === 'btn-primary' && operator !== '' ){
                display = e.target.innerText
                screen.innerHTML = display
                operator = ''
                console.log("no")
            }

            else if(e.target.className === 'btn-primary' || e.target.innerText === '0'){
                display +=  e.target.innerText
                screen.innerHTML = display
                console.log("pri")
            }
            
            else {
                operator = e.target.value
                screen.innerHTML = display
                console.log("op")
            }
            console.log(display)
            console.log(cal)
        }
    })
})
