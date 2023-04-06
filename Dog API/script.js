
const dogImg = document.getElementById('dogimg')
const dogBtn = document.getElementById('dogbtn')
const darkBtn = document.getElementById('dark')

const newDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImg.innerHTML = `<img src="${json.message}" height=400 width=400>`
            console.log(json)
        })
}

dogBtn.onclick = () => newDog()

darkBtn.onclick = () => {
    document.body.classList.toggle("dark-theme")
}