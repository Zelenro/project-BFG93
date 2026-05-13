export const headerJS = () => {
  const userBar = document.querySelector('.user-bar');
  const dropdown = document.querySelector('.user-dropdown');

  // Собираем коллекцию всех ссылок (и текстовых, и в виде желтых кнопок)
  const navLinks = document.querySelectorAll('.nav-link, .nav-btn-link');
  // Логика выпадающего меню аккаунта
  if (userBar && dropdown) {
    userBar.addEventListener('click', () => {
      dropdown.classList.toggle('is-open');
      userBar.classList.toggle('is-active');
    });
    window.addEventListener('click', e => {
      if (!userBar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
      }
    });
  }
  // Логика автоматической подсветки активных ссылок
  const currentPath = window.location.pathname;
  // Вернет "/src/index.html" или "/src/page-Shopping-Lists.html"
  navLinks.forEach(link => {
    // Получаем чистый путь из href (например, "/src/index.html")
    const linkPath = link.pathname;

    // Если текущий адрес в браузере в точности совпадает с href ссылки
    if (currentPath === linkPath) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
};
