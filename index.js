function verifyEmail(value) {
    const email = value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

const inputEmail = document.querySelector('#email')

inputEmail.addEventListener('change', (event) => {
    if(!verifyEmail(event.target.value)){
        inputEmail.classList.add('error')
        console.log('ruim');
    }
    else{
        inputEmail.classList.remove('error')
        console.log('bom');
    }
})