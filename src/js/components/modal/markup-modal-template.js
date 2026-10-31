import sprite from '../../../img/sprite.svg';

export function markupModalTemplate(book, isInShoppingList, isLoggedIn) {
  const { _id, book_image, title, author, description, buy_links } = book;

  const shopsMarkup = buy_links
    .filter(({ name }) => {
      const shopName = name.toLowerCase();
      return shopName.includes('amazon') || shopName.includes('apple');
    })
    .map(({ name, url }) => {
      let shopClass = name
        .toLowerCase()
        .replace(/&/g, '')
        .replace(/[\s-]+/g, '-')
        .trim();

      return `
         <a href="${url}" target="_blank" rel="noopener noreferrer" class="modal__shop-link ${shopClass}">
          <img src="./img/${shopClass}.png" alt="${shopClass}" class="shop-link-img ${shopClass}"><span class="visually-hidden"></span>
        </a>
      `;
    })
    .join('');


  let btnText = 'ADD TO SHOPPING LIST';
  let btnDisabledAttr = '';
  let btnDisabledClass = '';
  let notificationClass = 'visually-hidden';

  if (!isLoggedIn) {
    btnText = 'LOG IN TO ADD TO SHOPPING LIST';
    btnDisabledAttr = 'disabled="true"';
    btnDisabledClass = 'is-disabled';
  } else if (isInShoppingList) {
    btnText = 'REMOVE FROM THE SHOPPING LIST';
    notificationClass = '';
  }

  return `
    <div class="modal__book-container">

  <button type="button" class="modal__close-btn" data-modal-close>
    <svg class="modal__close-icon" width="12" height="12">
      <use href="${sprite}#cross"></use>
    </svg>
  </button>

  <article class="modal__book-card" data-id="${_id}">

    <div class="modal__card-cover">
      <img src="${book_image}" alt="${title}" class="modal__card-image" />
    </div>

    <div class="modal__card-info">
      <h3 class="modal__card-title">${title}</h3>
      <p class="modal__card-author">${author}</p>
      
      <p class="modal__card-description">
        ${description || 'No description available.'}
      </p>

      <div class="modal__where-to-buy">${shopsMarkup}</div>
    </div>

  </article>
  
  <div class="modal__action-box">
    <button type="button" class="modal__action-btn js-modal-btn" data-id="${_id}">
      ${btnText}
    </button>

    <p class="modal__notification js-modal-notification ${notificationClass}">
      Congratulations! You have added the book to the shopping list. To
      delete, press the button "Remove from the shopping list".
    </p>
    
  </div>
</div>
  `;
}
