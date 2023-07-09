function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const containerControlsEl = document.querySelector('#controls');
const inputEl = containerControlsEl.firstElementChild;
const buttonCreateEl = inputEl.nextElementSibling;
const buttonDestroyEl = containerControlsEl.lastElementChild;
const containerBoxes = document.querySelector('#boxes');

containerBoxes.classList.add('container-flex');

buttonCreateEl.addEventListener('click', onCreateClick);
buttonDestroyEl.addEventListener('click', onDeleteClick);

function onDeleteClick() {
    clearContainer();
    clearInput();
}

function onCreateClick() {
    if (
        Number(inputEl.value) >= Number(inputEl.min) &&
        Number(inputEl.value) <= Number(inputEl.max)
    ) {
        clearContainer();
        createBoxes(Number(inputEl.value));
        clearInput();
    } else {
        alert('Введіть число від 1 до 100 включно !');
        clearInput();
    }
}

const clearInput = () => (inputEl.value = '');
const clearContainer = () => (containerBoxes.innerHTML = '');

const createBoxes = amount => {
    const markup = [];
    let sizeBox = 30;
    for (let i = 1; i <= amount; i += Number(inputEl.step)) {
        markup.push(`<div
                style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()}"
            ></div>`);
        sizeBox += 10;
    }

    containerBoxes.innerHTML = markup.join('');
};
