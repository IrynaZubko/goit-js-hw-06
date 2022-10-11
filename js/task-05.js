const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
    if (refs.nameLabel.textContent === '') {
        refs.nameLabel.textContent = 'Anonymous';
    }
}