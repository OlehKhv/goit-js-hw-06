function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const textChangedColor = document.querySelector('.color');

buttonEl.addEventListener('click', onClick);

function onClick() {
    const currentColor = getRandomHexColor();
    bodyEl.style.backgroundColor = currentColor;
    textChangedColor.textContent = currentColor;
}
