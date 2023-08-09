const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginButton = document.querySelector('.login-button');

const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');
const dalejButton = document.querySelector('.dalej');

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userEmail = emailInput.value;
        const userPassword = passwordInput.value;

        localStorage.setItem('userEmailFromInput', userEmail);
        localStorage.setItem('userPasswordFromInput', userPassword);
        
        console.log('Zapisane w localStorage:', userEmail, userPassword);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const storedEmail = localStorage.getItem('userEmailFromInput');
    const storedPassword = localStorage.getItem('userPasswordFromInput');
    
    console.log('Odczytane z localStorage:', storedEmail, storedPassword);
});

loginPassword.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const enteredPassword = loginPassword.value;
        const storedPassword = localStorage.getItem('userPasswordFromInput');
        
        if (enteredPassword === storedPassword) {
            dalejButton.classList.remove('dalej');  
        } else {
            console.log('Nie działa');
        }
    }
});