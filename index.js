let fund = 7000 
document.getElementById('total-amount').innerText = fund
function calculate_fund(fund_value,donation){
    return fund_value - donation
}

// route click section 
const donation_section = document.getElementById('donation-section')
const history_section = document.getElementById('history-section')

document.getElementById('donation').addEventListener('click',function(event){
    event.target.style.backgroundColor = '#B4F461'
    event.target.style.border = '0px'
    document.getElementById('history').style.backgroundColor=''
    document.getElementById('history').style.border='1px solid rgba(17, 17, 17, 0.3)'
    history_section.classList.add('hidden')
    donation_section.classList.remove('hidden')

})

document.getElementById('history').addEventListener('click',function(event){
    event.target.style.backgroundColor = '#B4F461'
    event.target.style.border = '0px'
    document.getElementById('donation').style.backgroundColor=''
    document.getElementById('donation').style.border='1px solid rgba(17, 17, 17, 0.3)'
    donation_section.classList.add('hidden')
    history_section.classList.remove('hidden')
})

// console.log(donation_section)
// console.log(history_section)