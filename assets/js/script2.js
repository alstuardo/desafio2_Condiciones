let btn = document.querySelector('#btn')

function detection (){
    num1 = document.querySelector('#num1').value;
    num2 = document.querySelector('#num2').value;
    num3 = document.querySelector('#num3').value;
    message = document.querySelector('.message')
}

function verify (){
    detection()
    total = Number(num1) + Number(num2) + Number(num3);
    if (total <= 10){
        message.innerHTML = "Llevas " + total + " stickers"
    }
    else {
        message.innerHTML = "Llevas demasiados stickers"
    }} 
    
    btn.addEventListener('click', verify)
