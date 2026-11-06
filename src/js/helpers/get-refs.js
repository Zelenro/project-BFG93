export function getRefs() {
  return {
    authForm: document.querySelector('.auth-form'),
    authSubmitBtn: document.querySelector('.submit-sign-up'),
    authSwitchSignInBtn: document.querySelector('.switch-sign-in'),
    authSwitchSignUpBtn: document.querySelector('.switch-sign-up'),
    authInputName: document.querySelector('.txtUsername'),
    authInputEmail: document.querySelector('.txtEmail'),
    authInputPassword: document.querySelector('.txtPassword'),
    authCloseBtn: document.querySelector('.auth-modal__close-btn'),
    authBackdrop: document.querySelector('.auth-backdrop'),
    headerSignUpBtn: document.querySelector('.header-signup-btn'),
    logoutBtn: document.querySelector('.logout-btn'),
    jsLogoutBtn: document.querySelector('.js-logout-btn'),
    fullscreenMenuLogoutBtn: document.querySelector(
      '.fullscreen-menu__logout-btn'
    ),
    userMenu: document.querySelector('.user-menu'),
    userBar: document.querySelector('.user-bar'),
    userDropdown: document.querySelector('.user-dropdown'),
    userName: document.querySelector('.user-bar__name'),
    navLinks: document.querySelectorAll('.nav-link, .nav-btn-link'),
    navHomeLink: document.querySelector(
      '.nav-link[href="/"], .nav-link[href="./"], .nav-link[href="/index.html"], .nav-link[href="/project-BFG93/"], .nav-link[href="/project-BFG93/index.html"]'
    ),
    navShoppingLink: document.querySelector(
      '.nav-link[href="/shopping-list.html"], .nav-link[href="./shopping-list.html"], .nav-link[href="/project-BFG93/shopping-list.html"]'
    ),
    navList: document.querySelector('.nav-list'),
    menuUserName: document.querySelector('.menu__user-name'),
    menuToggle: document.querySelector('.menu-toggle'),
    menu: document.querySelector('.menu'),
    homePage: document.querySelector('.js-home'),
    shoppingListPage: document.querySelector('.js-shoppig-list'),
    categoriesList: document.querySelector('.categories__list'),
    booksList: document.querySelector('.books__list'),
    backgroundListBook: document.querySelector('.background-list-book'),
    booksListTitle: document.querySelector('.books__list__title'),
    listCharitableFoundation: document.querySelector('.foundations__list'),
    supportSliderBtn: document.querySelector('.support__slider-btn'),
    bookModal: document.querySelector('.modal'),
    bookModalBtn: document.querySelector('.js-modal-btn'),
    bookModalNotification: document.querySelector('.js-modal-notification'),
    shoppingListContainer: document.querySelector('#dynamic-book-list'),
    paginationBlock: document.querySelector('.js-pagination'),
    pageLoader: document.querySelector('#page-loader'),
    googleBtn: document.querySelector('.btn-google'),
  };
}
