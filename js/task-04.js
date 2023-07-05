let counterValue = 0;
const buttonMinusEl = document.querySelector('button[data-action="decrement"]');
const buttonPlusEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

buttonMinusEl.addEventListener('click', () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

buttonPlusEl.addEventListener('click', () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
