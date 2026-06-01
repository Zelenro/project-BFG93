export function markupCardBooks(book, user) {
  const { _id, book_image, title, author, description, buy_links, list_name } =
    book;

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

      if (shopClass === 'barnes-noble' || shopClass === 'barnes-and-noble') {
        shopClass = 'barnes-and-noble';
      }

      if (shopClass === 'bookshop.org' || shopClass === 'bookshop-org') {
        shopClass = 'bookshop';
      }

      return /*html*/ `<a href="${url}" target="_blank" rel="noopener noreferrer" class="modal__shop-link ${shopClass}">
          <img src="../../../img/${shopClass}.png" alt="${shopClass}" class="shop-link-img ${shopClass}"><span class="visually-hidden"></span>
        </a>
      `;
    })
    .join('');

  return /*html*/ `<li class="book-card">
    <img src="${book_image}" alt="${title} book cover" class="book-cover" />

    <div class="book-info">
      <h2 class="book-title">${title}</h2>
      <p class="book-genre">${list_name}</p>
      <p class="book-description">${description}</p>
      <p class="book-author">${author}</p>

      <div class="modal__where-to-buy">${shopsMarkup}</div>
    </div>

    <button
      class="delete-btn"
      data-id="${_id}"
      data-user="${user}"
      aria-label="Remove from list"
    >
      <svg class="nav-logo-icon" width="24" height="24">
        <use href="../../../img/sprite.svg#dump"></use>
      </svg>
    </button>
  </li>`;
}
