export function toggleModalBtnAddToShopingList(isInShoppingList) {
  const btn = document.querySelector('.js-modal-btn');
  const notification = document.querySelector('.js-modal-notification');

  if (!btn) return;

  if (isInShoppingList) {
    btn.textContent = 'REMOVE FROM THE SHOPPING LIST';
    if (notification) notification.classList.remove('visually-hidden');
  } else {
    btn.textContent = 'ADD TO SHOPPING LIST';
    if (notification) notification.classList.add('visually-hidden');
  }
}
