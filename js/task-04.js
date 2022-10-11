let counterValue = 0;

const decrementListenerBtn = document.querySelector('[data-action="decrement"]');
const incrementListenerBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementListenerBtn.addEventListener('click', handleDecrementBtnClick);
incrementListenerBtn.addEventListener('click', handleIncrementBtnClick);

function handleDecrementBtnClick() {
    counterValue -= 1;
    valueEl.innerHTML = `${counterValue}`;
}

function handleIncrementBtnClick() {
    counterValue += 1;
    valueEl.innerHTML = `${counterValue}`;
}