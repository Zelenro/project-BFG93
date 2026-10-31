// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');

// Установка темы
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeToggle) themeToggle.checked = theme === 'dark';
  localStorage.setItem('theme', theme);
}

// Переключение темы
themeToggle?.addEventListener('change', e => {
  setTheme(e.target.checked ? 'dark' : 'light');
});

// Инициализация
const savedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');
setTheme(savedTheme);

// Слушаем системную тему
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

export { setTheme };
