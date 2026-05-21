export function activationCurrentLink(categoryName) {
  const allCategoryLinks = Array.from(
    document.querySelectorAll('.categories__link')
  );
  const targetLink = allCategoryLinks.find(
    link => link.textContent.trim() === categoryName.trim()
  );
  if (targetLink) {
    const currentActiveButton = document.querySelector(
      '.categories__link.is-active'
    );
    if (currentActiveButton) {
      currentActiveButton.classList.remove('is-active');
    }
    targetLink.classList.add('is-active');
    targetLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}
