const donationPart = document.getElementById('donation')
const HistoryPart = document.getElementById('history')
const donationBtn = document.getElementById('btn-donation')
const HistoryBtn = document.getElementById('btn-history')
const ammount = document.getElementById('balance')
const balance = parseFloat(ammount.innerText)
const modal = document.getElementById('modal')

// history Button
const btnHistory = document.getElementById('btn-history').addEventListener('click', function () {
    donationPart.classList.add('hidden')
    HistoryBtn.classList.add('btn-history')
    donationBtn.classList.add('btn-donation')
    HistoryPart.classList.remove('hidden')
})


// Donation Button
donationBtn.addEventListener('click', function () {
    donationBtn.classList.remove('btn-donation')
    HistoryBtn.classList.remove('btn-history')
    donationPart.classList.remove('hidden')
    HistoryPart.classList.add('hidden')
})

// Noakhali Donate Card
document.getElementById('noakhali').addEventListener('click', function () {
    const inputField = document.getElementById('noakhali-input')
    const inputText = inputField.value

    if (inputText <= 0 || isNaN(inputText)) {
        alert('Please enter the valid ammount')
        inputField.value = ''
        return
    }

    if (inputText > balance) {
        alert(`Please enter ${balance} under amount`)
        inputField.value = ''
        return
    }

    const addElement = document.getElementById('noakhali-donate')
    const addDonate = parseFloat(addElement.innerText) || 0
    const inputAmount = parseFloat(inputText)

    const total = addDonate + inputAmount

    addElement.innerText = total

    const newBalance = balance - inputAmount
    ammount.innerText = newBalance

    const div = document.createElement('div')
    div.classList.add('history-box')

    div.innerHTML = `<h4><span>${total}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
                <p class="histroy-title">Date : ${new Date()} </p>`

    HistoryPart.append(div)

    inputField.value = ''

})

// Feni Donate Card
document.getElementById('feni').addEventListener('click', () => {
    const inputField = document.getElementById('feni-input')
    const inputText = parseFloat(inputField.value)

    if (isNaN(inputText) || inputText <= 0) {
        alert('Please enter a valid number')
        inputField.value = ''
        return
    }
    if (inputText > balance) {
        alert(`Please enter ${balance} under ammount`)
        inputField.value = ''
        return
    }

    const addElement = document.getElementById('feni-donate')
    const addDonate = parseFloat(addElement.innerText)

    const total = addDonate + inputText

    addElement.innerText = total

    const newBalance = balance - inputText
    ammount.innerText = newBalance

    const div = document.createElement('div')
    div.classList.add('history-box')

    div.innerHTML = `<h4><span>${total}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
                <p class="histroy-title">Date : ${new Date()} </p>`

    HistoryPart.append(div)
    inputField.value = ''
})

// Qouta Movement
document.getElementById('qouta').addEventListener('click', () => {
    const inputField = document.getElementById('qouta-input')
    const inputText = parseFloat(inputField.value)

    if (isNaN(inputText) || inputText <= 0) {
        alert('Please enter a valid number')
        inputField.value = ''
        return
    }

    if (inputText > balance) {
        alert(`Please enter ${balance} under ammount`)
        inputField.value = ''
        return
    }

    const addElement = document.getElementById('qouta-donate')
    const addDonate = parseFloat(addElement.innerText)

    const total = addDonate + inputText

    addElement.innerText = total

    const newBalance = balance - inputText
    ammount.innerText = newBalance


    const div = document.createElement('div')
    div.classList.add('history-box')

    div.innerHTML = `<h4><span>${total}</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
                <p class="histroy-title">Date : ${new Date()} </p>`

    HistoryPart.append(div)
    inputField.value = ''


})