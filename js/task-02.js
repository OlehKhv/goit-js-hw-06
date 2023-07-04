const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const listItemsEl = ingredients.map(item => {
  const itemEl = document.createElement('li');
  itemEl.textContent = item;
  itemEl.classList.add('item');
  return itemEl;
});

listEl.append(...listItemsEl);
