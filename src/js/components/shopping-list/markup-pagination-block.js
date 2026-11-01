export function markupPaginationBlock(
  paginationBlock,
  currentPage,
  totalPages
) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const markup = /*html*/ `   
   
   <button class="pagination__btn js-pag-first" data-page="first" type="button" ${isFirstPage ? 'disabled' : ''}>
  &laquo;
</button>
<button class="pagination__btn js-pag-prev" data-page="prev" type="button" ${isFirstPage ? 'disabled' : ''}>
  &lsaquo;
</button>

<div class="pagination__pages js-pag-pages">${currentPage} of ${totalPages}</div>

<button class="pagination__btn js-pag-next" data-page="next" type="button" ${isLastPage ? 'disabled' : ''}>
  &rsaquo;
</button>
<button class="pagination__btn js-pag-last" data-page="last" type="button" ${isLastPage ? 'disabled' : ''}>
  &raquo;
</button>`;

  paginationBlock.innerHTML = markup;
}
