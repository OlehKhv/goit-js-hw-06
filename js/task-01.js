const listItemsEl = document.querySelectorAll('.item');
console.log('Number of categories:', listItemsEl.length);
listItemsEl.forEach(item => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length);
});
