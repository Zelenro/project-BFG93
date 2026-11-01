import { getRefs } from '../../helpers/get-refs';
import {
  loginUser,
  logoutUser,
  registerUser,
  signInWithGooglePopup,
} from '../../api/firebase-service';
import { headerJS } from '../header/header';
import { getRedirectResult, updateProfile } from 'firebase/auth';

const refs = getRefs();

let isSignUp = false;

function togleSwitchAuth(e) {
  const btn = e.target;
  if (btn === refs.authSwitchSignUpBtn) {
    isSignUp = true;
    refs.authSwitchSignUpBtn.classList.add('is-active');
    refs.authSwitchSignInBtn.classList.remove('is-active');
    refs.authSubmitBtn.textContent = 'Sign up';
    refs.authInputName.style.display = 'block';
    refs.authInputName.required = true;
  } else if (btn === refs.authSwitchSignInBtn) {
    isSignUp = false;
    refs.authSwitchSignUpBtn.classList.remove('is-active');
    refs.authSwitchSignInBtn.classList.add('is-active');
    refs.authSubmitBtn.textContent = 'Sign in';
    refs.authInputName.style.display = 'none';
    refs.authInputName.required = false;
  }
}

export function closeModal() {
  if (refs.authForm) {
    refs.authForm.reset();
    refs.authBackdrop.classList.add('is-hidden');
  }
  isSignUp = false;
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function openModal() {
  refs.authBackdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscKeyPress);
}

async function handleSubmitForm(e) {
  e.preventDefault();

  const isSignUpMode = refs.authSubmitBtn.textContent === 'Sign up';
  const email = refs.authInputEmail.value.trim();
  const password = refs.authInputPassword.value.trim();
  const userName = refs.authInputName?.value.trim();

  try {
    if (isSignUpMode) {
      if (!userName) {
        alert('Пожалуйста, введите имя для регистрации');
        return;
      }
      const user = await registerUser(email, password, userName);
      if (!user) return;
      refs.headerSignUpBtn.classList.add('is-hidden');
      alert(`Успешная регистрация ${userName}!`);
      headerJS(userName);
    } else {
      await loginUser(email, password);
      alert('Успешный вход!');
    }

    isSignUp = false;
    closeModal();
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      alert('Этот email уже зарегистрирован');
    } else if (errorCode === 'auth/invalid-email') {
      alert('Некорректный email');
    } else if (errorCode === 'auth/invalid-credential') {
      alert('Неверный email или пароль');
    } else if (errorCode === 'auth/too-many-requests') {
      alert('Слишком много попыток. Попробуйте позже.');
    } else {
      alert(`Ошибка: ${error.message}`);
    }
    console.error(errorCode, error.message);
  }
}

async function handleGoogleSignIn() {
  try {
    const user = await signInWithGooglePopup();
    if (user) {
      console.log('Вход через Google успешен:', user.displayName);
      if (!user.displayName) {
        const name = prompt('Введите ваше имя для профиля:');
        if (name) {
          await updateProfile(user, { displayName: name });
        }
      }
      closeModal();
    }
  } catch (error) {
    console.error('Ошибка Google входа:', error);
    alert('Не удалось войти через Google. Попробуйте снова.');
  }
}

function handleBackdropClick(e) {
  if (e.target === refs.authBackdrop) closeModal();
}

if (refs.headerSignUpBtn) {
  refs.headerSignUpBtn.addEventListener('click', openModal);
}

if (refs.authForm) {
  refs.authForm.addEventListener('submit', handleSubmitForm);
}

if (refs.authBackdrop) {
  refs.authBackdrop.addEventListener('click', handleBackdropClick);
}

if (refs.authCloseBtn) {
  refs.authCloseBtn.addEventListener('click', closeModal);
}

if (refs.fullscreenMenuLogoutBtn) {
  refs.fullscreenMenuLogoutBtn.addEventListener('click', logoutUser);
}

if (refs.logoutBtn) {
  refs.logoutBtn.addEventListener('click', logoutUser);
}

if (refs.googleBtn) {
  refs.googleBtn.addEventListener('click', handleGoogleSignIn);
}

if (refs.authSwitchSignUpBtn && refs.authSwitchSignInBtn) {
  refs.authSwitchSignUpBtn.addEventListener('click', togleSwitchAuth);
  refs.authSwitchSignInBtn.addEventListener('click', togleSwitchAuth);
}
