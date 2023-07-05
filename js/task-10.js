function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const containerControlsEl = document.querySelector('#controls');
const inputEl = containerControlsEl.firstElementChild;
const buttonCreateEl = inputEl.nextElementSibling;
const buttonDestroyeEl = containerControlsEl.lastElementChild;
const containerBoxes = document.querySelector('#boxes');

containerBoxes.classList.add('container-flex');

buttonCreateEl.addEventListener('click', onCreateClick);
buttonDestroyeEl.addEventListener('click', onDeleteClick);

function onDeleteClick() {
    clearContainer();
    clearInput();
}

function onCreateClick() {
    if (
        Number(inputEl.value) >= Number(inputEl.min) &&
        Number(inputEl.value) <= Number(inputEl.max)
    ) {
        containerBoxes.innerHTML = '';
        createBoxes(inputEl.value);
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

    for (let i = 1, j = 30; i <= amount; i++, j += 10) {
        markup.push(`<div
                style="width: ${j}px; height: ${j}px; background-color: ${getRandomHexColor()}"
            ></div>`);
    }

    containerBoxes.insertAdjacentHTML('afterbegin', markup.join(''));
};
