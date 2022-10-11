function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.changeColorBtn.addEventListener('click', handleChangeColorBtnClick);

function handleChangeColorBtnClick() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorName.innerHTML = color;
}