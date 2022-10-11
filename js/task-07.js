const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.input.addEventListener('input', handleInputChange);

refs.text.style.fontSize = `${refs.input.value}px`;

function handleInputChange() {
    refs.text.style.fontSize = `${refs.input.value}px`;
}