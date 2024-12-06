let balance = 7000 
const get_balance = document.getElementById('total-amount')
get_balance.innerText = balance

function calculate_fund(balance_value,donation){
    return balance_value- donation
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

// fund add and money decrease section 

// get click button 
const get_button = donation_section.querySelectorAll('button')
for(const button of get_button){
    button.onclick = function (event){
        const get_parent = event.target.parentNode
        console.log(get_parent)
    }
}