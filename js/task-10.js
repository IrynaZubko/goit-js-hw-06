function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  number: document.querySelector('input'),
  createBoxesBtn: document.querySelector('[data-create]'),
  destroyBoxesBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.number.addEventListener('input', handleInputChange);
refs.createBoxesBtn.addEventListener('click', createBoxes);
refs.destroyBoxesBtn.addEventListener('click', destroyBoxes);

let amountOfBoxes = 0;

function handleInputChange(event) {
  amountOfBoxes = event.currentTarget.value;
}

const maxNumber = refs.number.getAttribute('max');

function createBoxes(amount) {
  amount = Number(amountOfBoxes);
  let sizeValue = 20;

  if (amount > maxNumber) {
    alert('Max number is 100!');    
  } else {
    for (let number = 1; number <= amount; number += 1) {
      sizeValue += 10;
      let box = `<div style="width: ${sizeValue}px; height: ${sizeValue}px; background-color: ${getRandomHexColor()};"></div>`;

      refs.boxes.insertAdjacentHTML('beforeend', box);
    }
  }
}

function destroyBoxes() {
  [...refs.boxes.children].forEach(element => {
    element.remove();
  });
}