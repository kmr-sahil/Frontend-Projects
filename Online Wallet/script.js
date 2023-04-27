

const balanceDiv = document.getElementById('balance')
const withdrawBtn = document.getElementById('withdraw')
const depositBtn = document.getElementById('deposit')
const amount = document.getElementById('amount')
const eyeBtn = document.getElementById('eye')
const messageDiv = document.getElementById('message')

class Bank {
   constructor( balance ){
      
      this.balance = balance
   }
   deposit (n) {
      this.balance =+ this.balance + n
      console.log(user.balance,`+${n} added`)
   }
   withdraw(n) {
      if(this.balance <= n){
         console.log("Payment Failed Insufficient amount")
         document.getElementById('failed').play()
         messageDiv.innerText = `Payment Failed Insufficient amount`
      }
      else {
      this.balance =+ this.balance - n
      console.log(user.balance,`-${n} withdraw`)
      document.getElementById('success').play()
      messageDiv.innerText = `-${n} withdraw`
   }
}
}

const user = new Bank (0)

depositBtn.onclick = () => {
   const n = Number(amount.value)
   user.deposit(n)
   messageDiv.innerText = `+${n} added`
   amount.value = ''
   document.getElementById('success').play()
   setTimeout(() => {
      messageDiv.innerText = ''
   },3000)
}

withdrawBtn.onclick = () => {
   const n = Number(amount.value)
   user.withdraw(n)
   
   amount.value = ''
   setTimeout(() => {
      messageDiv.innerText = ''
   },3000)
}

eyeBtn.onclick = () => {
   
   if(eyeBtn.innerHTML == `<i class="fa-solid fa-eye"></i>`){
   balanceDiv.innerHTML = `<strong> Available Balance : ₹ ${user.balance} </strong> `
   eyeBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
   }
   else {
      balanceDiv.innerHTML = `<strong> Available Balance : ₹ XXXX </strong>`
   eyeBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`
   }
}

