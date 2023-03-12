let welcome_text = document.getElementById('type')

function txtupdate(){
    setTimeout (() => {welcome_text.remove(); welcome_text.innerHTML = "‎ Every Formula."; document.getElementById('wel').appendChild(welcome_text)}, 500)

    setTimeout (() => {welcome_text.remove(); welcome_text.innerHTML = "‎ All Textbooks."; document.getElementById('wel').appendChild(welcome_text)}, 5000)

    setTimeout (() => {welcome_text.remove(); welcome_text.innerHTML = "‎ All Resources."; document.getElementById('wel').appendChild(welcome_text)}, 10000);
    setTimeout(txtupdate, 15250)
}

document.querySelector('.card-bg svg').style.height = Math.floor(Math.random()*70) + 313
document.querySelector('.card-bg-down svg').style.height = (Math.random()*80) + 90


txtupdate()
