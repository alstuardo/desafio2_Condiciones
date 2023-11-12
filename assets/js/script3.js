let pass1 = document.querySelector('#pass1');

let btn = document.querySelector('button');

btn.addEventListener('click', () =>{
   (data() || data1())
})

function data (){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let num3 = document.querySelector('.num3').value;   
    if (num1 === '9' && num2 === '1' && num3 === '1'){
        pass1.innerHTML = 'Password 1 Correcto'
        pass1.style.color = 'green'
    }else {pass1.innerHTML = 'Password Incorrecto'
        pass1.style.color = 'red'
    }}

function data1 (){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let num3 = document.querySelector('.num3').value;   
        if (num1 === '7' && num2 === '1' && num3 === '4'){
            pass1.innerHTML = 'Password 2 Correcto'
            pass1.style.color = 'green'
        }}