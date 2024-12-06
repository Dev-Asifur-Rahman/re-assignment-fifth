let balance = 7000;
const get_balance = document.getElementById("total-amount");
get_balance.innerText = balance;

function calculate_balance(balance_value, donation) {
  return balance_value - donation;
}

// route click section
const donation_section = document.getElementById("donation-section");
const history_section = document.getElementById("history-section");

document.getElementById("donation").addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#B4F461";
  event.target.style.border = "0px";
  document.getElementById("history").style.backgroundColor = "";
  document.getElementById("history").style.border =
    "1px solid rgba(17, 17, 17, 0.3)";
  history_section.classList.add("hidden");
  donation_section.classList.remove("hidden");
});

document.getElementById("history").addEventListener("click", function (event) {
  event.target.style.backgroundColor = "#B4F461";
  event.target.style.border = "0px";
  document.getElementById("donation").style.backgroundColor = "";
  document.getElementById("donation").style.border =
    "1px solid rgba(17, 17, 17, 0.3)";
  donation_section.classList.add("hidden");
  history_section.classList.remove("hidden");
});

// fund add and money decrease section

// get click button
const get_button = donation_section.querySelectorAll("button");
for (const button of get_button) {
  button.onclick = function (event) {
    const get_parent = event.target.parentNode;
    const get_input_value = get_parent.querySelector("input").value;
    if (isNaN(get_input_value) || get_input_value === "") {
      get_parent.querySelector("input").value = "";
      alert("Enter a valid number");
    } else {
      let donate = parseInt(get_input_value);
      if (donate > balance) {
        get_parent.querySelector("input").value = "";
        alert("Insufficient Amount");
      }
      else if(donate <= 0){
        get_parent.querySelector("input").value = "";
        alert('Enter Valid Amount')
      }
      else {
        balance = calculate_balance(balance, donate);
        get_balance.innerText = balance
        get_parent.querySelector("input").value = "";
        const fund_value = parseInt(get_parent.querySelector('span').innerText)
        const total_fund = fund_value + donate
        get_parent.querySelector('span').innerText = total_fund

        // add donation section 
        const date = new Date()
        const get_heading = get_parent.querySelector('h2')
        const child = document.createElement('div')
        child.innerHTML = `<div class="bg-[#1111111A] rounded-xl py-4 lg:px-6 px-3 my-4 shadow-xl" style="border: 1px solid rgba(17, 17, 17, 0.1);">
          <p class="font-bold text-[#111111] lg:text-xl text-base">${donate} Taka is Donated for ${get_heading.innerText}</p>
          <p class="lg:text-base text-sm text-[#111111B3] font-light">Date : ${date}</p>
        </div>`
        history_section.appendChild(child)

        // show modal section 
        const get_modal = document.getElementById('my_modal_5')
        get_modal.showModal()
      }
    }
  };
}
