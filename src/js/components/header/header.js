export const headerJS = () => {
  const userBar = document.querySelector('.user-bar');
  const dropdown = document.querySelector('.user-dropdown');

  const navLinks = document.querySelectorAll('.nav-link, .nav-btn-link');
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

  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = link.pathname;
    if (currentPath === linkPath) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
};
