
img.addEventListener('click', () => {
    let image = document.querySelector('#img');
    if(image.classList.contains('border')){
    image.classList.remove('border')
}
    else{
    image.classList.add('border')
}})



