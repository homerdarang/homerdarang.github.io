'use strict';

let nameErrMsg = document.querySelector('.name-error-message');
let errorMsg = document.querySelector('.error-message');
let success = document.querySelector('#success');
let failed = document.querySelector('#failed');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let validate = document.querySelector('#validation');


let closeModal = function(){
    success.classList.add('hidden');
    failed.classList.add('hidden');
    validate.classList.add('hidden');
    overlay.classList.add('hidden');
}

let overlayRemove = function() {
    overlay.classList.remove('hidden');
}

// Sending Email ============= >>>>>>>>>>>
let btn = document.querySelector('.btn-submit');
btn.addEventListener('click', sendMail);
function sendMail() {
    let params = {
        name :  document.getElementById('fullName').value,
        email:  document.getElementById('emailInput').value,
        message:  document.getElementById('floatingMessage').value
    };

    const serviceId = 'service_f901doa';
    const templateId = 'template_lmxug28';

    // Validation ============= >>>>>>>>>>>
    if (params.email === '' || params.name === '' || !params.email.includes('@gmail') || !params.email.includes('@icloud')){
        console.log('false');
        // validate.classList.remove('hidden');
        errorMsg.textContent = 'Please a valid email ( @gmail.com or @icloud.com )';
        nameErrMsg.textContent = 'Please provide your name';
        email.classList.add('red-input');
        fullName.classList.add('red-input');
        // overlayRemove();
        return false;
    } 

    errorMsg.textContent = '';
    nameErrMsg.textContent = '';
    return true;
    
    emailjs.send(serviceId, templateId, params)
    .then ((res) => {
            console.log('Email Successfully sent!', res);
            
            if(res.status === 200) {
                success.classList.remove('hidden');
                overlayRemove();

                document.querySelector('#emailInput').value = '';
                document.querySelector('#floatingMessage').value = '';
                document.querySelector('#fullName').value = '';
            } else{
                failed.classList.remove('hidden');
                overlayRemove();
            } 
    })
    .catch((err) => console.log('Error sending email.', err));

    btnCloseModal.addEventListener('click', closeModal);
    
};

document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
        closeModal();
    }
});


