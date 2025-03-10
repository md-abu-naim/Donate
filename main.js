const donationPart = document.getElementById('donation')
const HistoryBtn = document.getElementById('btn-history')
const donationBtn = document.getElementById('btn-donation')
const HistoryPart = document.getElementById('history')

const btnHistory = document.getElementById('btn-history').addEventListener('click', function () {
    donationPart.classList.add('hidden')
    HistoryBtn.classList.add('btn-history')
    donationBtn.classList.add('btn-donation')
    HistoryPart.classList.remove('hidden')
})

donationBtn.addEventListener('click', function () {

})