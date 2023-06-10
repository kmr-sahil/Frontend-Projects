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
            cal = (eval(cal)).toFixed(2)
            console.log(`main - ${cal}`)
            display = cal
            if(display > 999999999){
                display = display.slice(0,-9) + 'e';
            }
            screen.innerHTML = display
        }
        else{
            cal = cal + (e.target.className === 'btn-primary'? e.target.innerText : e.target.value)
        
            if (e.target.className === 'btn-primary' && operator !== '' ){
                display = e.target.innerText
                
                operator = ''
                if(display > 999999999){
                    display = display.toLowerCase().slice(0,-9) + 'e';
                }
                screen.innerHTML = display
                console.log("no")
            }

            else if(e.target.className === 'btn-primary' || e.target.innerText === '0'){
                display +=  e.target.innerText
                
                if(display > 999999999){
                    display = display.slice(0,-9) + 'e';
                }
                screen.innerHTML = display
                console.log("pri")
            }

            else if (e.target.className === 'btn-secondary' && operator !== '' ){
                cal = cal.slice(0, -2)
                console.log(cal)
                cal = cal + e.target.value
                console.log("ab")
                
            }
            
            else {
                operator = e.target.value
                screen.innerHTML = display
                console.log("op")
            }
            console.log(display)
            
        }
    })
})


let infoLogo = document.getElementById('info-logo')
let infoExpand = document.getElementById('info-expand')
let c = 0

infoLogo.onclick = () => {
    if(c === 0){
        c = 1
        infoExpand.style.display = 'block'
        infoLogo.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
    }
    else {
        c = 0
        infoExpand.style.display = 'none'
        infoLogo.innerHTML = `<i class="fa-solid fa-circle-info"></i>`
    }
}
