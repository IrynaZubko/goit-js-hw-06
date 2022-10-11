const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', handleLoginFormSubmit);

function handleLoginFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    const userData = {
        email: email.value,
        password: password.value,
    };

    console.log(userData);
    event.currentTarget.reset();
    return userData;
}