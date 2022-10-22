const inputEl = document.querySelector('#validation-input[data-length="6"]');

inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur() {
    if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
    }
    inputEl.classList.add('valid');
}