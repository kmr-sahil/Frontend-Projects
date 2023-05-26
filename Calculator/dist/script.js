let screen = document.querySelector('#output')
let numbers = document.querySelectorAll(".btn-primary, .btn-secondary")


Array.from(numbers).forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if(e.target.innerText === 'AC'){
            screen.innerText = '0'
        }
        else if(e.target.innerText === '='){
            console.log(screen.innerText)
            screen.innerText = eval(screen.innerText)
        }
        else{
            
            e.target.className === 'btn-primary'? screen.innerText += e.target.innerText : screen.innerText += e.target.value;
        }

    })
})