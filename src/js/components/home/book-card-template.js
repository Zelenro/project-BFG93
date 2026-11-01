export const bookCardTemplate = (book_image, title, author, _id) => {
  return /*html*/ `<li class="books__item">
              <article class="book-card">
                <div class="card__cover">
                  <img src="${book_image}" alt="${title}" class="book-card__image js-book-image" data-id="${_id}" />
                 <div class="quick-view-overlay">
        <p class="quick-view-text">Quick View</p>
      </div>
                  </div>
                <div class="card__info">
                <h3 class="card__title">${title}</h3>
                  <p class="card__author">${author}</p>
                  </div>
                </article>
                </li>`;
};
