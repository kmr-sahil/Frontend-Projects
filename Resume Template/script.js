const darkBtn = document.getElementById('mode')

darkBtn.onclick = () => {
    
    if(darkBtn.innerHTML == `change mode <i class="fa-solid fa-moon"></i>`){
        darkBtn.innerHTML = `change mode <i class="fa-solid fa-sun"></i>`
        document.body.classList.toggle("dark-theme")
        console.log("1")
    }
    else{
        darkBtn.innerHTML = `change mode <i class="fa-solid fa-moon"></i>`
        document.body.classList.toggle("dark-theme")
        console.log("2")
    }
}