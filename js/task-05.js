const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  //   if (!event.currentTarget.value) {
  //     nameEl.textContent = 'Anonymous';
  //     return;
  //   }
  //   nameEl.textContent = event.currentTarget.value;
  nameEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
});

console.log(nameEl);
