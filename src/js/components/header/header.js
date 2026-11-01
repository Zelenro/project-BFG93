import { getRefs } from '../../helpers/get-refs';
import { backgroundListBookRender } from '../menu/backgroundListBookRender';

let isListenersAttached = false;

function toggleBodyScroll(disable) {
  document.body.style.overflow = disable ? 'hidden' : '';
}

export const headerJS = user => {
  const refs = getRefs();
  if (!refs) return;

  if (user) {
    refs.headerSignUpBtn.classList.add('is-hidden');
    refs.userMenu.classList.remove('is-hidden');
    if (refs.userName) refs.userName.textContent = user;
    if (refs.menuUserName) refs.menuUserName.textContent = user;
    refs.navList.classList.remove('is-hidden');
    refs.menuToggle.classList.remove('is-hidden');
  } else {
    refs.headerSignUpBtn.classList.remove('is-hidden');
    refs.authBackdrop.classList.add('is-hidden');
    refs.userMenu.classList.add('is-hidden');
    refs.menuToggle.classList.add('is-hidden');
    if (refs.menuUserName) refs.menuUserName.textContent = '';
    refs.navList.classList.add('is-hidden');
  }

  if (refs.menu?.classList.contains('is-open')) {
    refs.menu.classList.remove('is-open');
    refs.menuToggle?.classList.remove('is-open');
    toggleBodyScroll(false);
  }

  const currentPath = window.location.pathname;
  refs.navLinks?.forEach(link => {
    link.classList.toggle('is-active', currentPath === link.pathname);
  });

  if (!isListenersAttached) {
    function openAuthMenu() {
      refs.authBackdrop.classList.remove('is-hidden');
    }

    function toggleUserDropdown() {
      refs.userDropdown?.classList.toggle('is-open');
      refs.userBar?.classList.toggle('is-active');

      if (refs.userDropdown?.classList.contains('is-open') && refs.menu) {
        refs.menu.classList.remove('is-open');
        refs.menuToggle?.classList.remove('is-open');
        toggleBodyScroll(false);
      }
    }

    function toggleMenu() {
      refs.menuToggle?.classList.toggle('is-open');
      refs.menu?.classList.toggle('is-open');

      const isMenuOpen = refs.menu?.classList.contains('is-open');
      toggleBodyScroll(isMenuOpen);

      if (isMenuOpen) {
        backgroundListBookRender();
      }
    }

    function closeDropdownOnOutsideClick(event) {
      if (
        refs.userBar &&
        refs.userDropdown &&
        !refs.userBar.contains(event.target) &&
        !refs.userDropdown.contains(event.target)
      ) {
        refs.userDropdown.classList.remove('is-open');
        refs.userBar.classList.remove('is-active');
      }
    }

    async function handleFullscreenLogout() {
      if (refs.menu?.classList.contains('is-open')) {
        toggleMenu();
      }
      refs.userDropdown?.classList.remove('is-open');
      refs.userBar?.classList.remove('is-active');
    }

    refs.headerSignUpBtn?.addEventListener('click', openAuthMenu);
    refs.menuToggle?.addEventListener('click', toggleMenu);
    refs.userBar?.addEventListener('click', toggleUserDropdown);
    refs.fullscreenMenuLogoutBtn?.addEventListener(
      'click',
      handleFullscreenLogout
    );
    window.addEventListener('click', closeDropdownOnOutsideClick);

    isListenersAttached = true;
  }
};
