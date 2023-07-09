const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    nameEl.textContent = event.currentTarget.value
        ? event.currentTarget.value.trim()
        : 'Anonymous';
});
