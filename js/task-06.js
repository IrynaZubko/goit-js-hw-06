const inputEl = document.querySelector('#validation-input[data-length="6"]');

inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
    if (inputEl.value.length < inputEl.dataset.length) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
}