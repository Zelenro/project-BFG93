import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  linkWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { closeModal } from '../components/auth/auth-modal';

const firebaseConfig = {
  apiKey: 'AIzaSyBkW0BAlPxPPdDWzJX-G3zTVZxbnLR71Uc',
  authDomain: 'bfg93-5764f.firebaseapp.com',
  projectId: 'bfg93-5764f',
  storageBucket: 'bfg93-5764f.firebasestorage.app',
  messagingSenderId: '973743450422',
  appId: '1:973743450422:web:dd15f931f56f5c3bc12b97',
  measurementId: 'G-ZEZXM3MV58',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export async function registerUser(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === 'auth/email-already-in-use') {
      alert('Email already in use');
    } else if (errorCode === 'auth/invalid-email') {
      alert('Invalid email');
    } else if (errorCode === 'auth/invalid-credential') {
      alert('Неверный email или пароль');
    } else {
      alert(error.message);
    }
    console.error(errorCode, error.message);
    return null;
  }
}

export async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    throw error;
  }
}

export async function linkWithGoogle() {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error('No user logged in');
  }

  try {
    const result = await linkWithPopup(currentUser, new GoogleAuthProvider());
    console.log('Account linked with Google:', result.user);
    return result.user;
  } catch (error) {
    console.error('Error linking account:', error);
    throw error;
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error('Ошибка входа:', error.code, error.message);
    throw error;
  }
}

export async function logoutUser() {
  await signOut(auth);
}

export function subscribeToAuthChanges(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function saveBooksToCloud(userId, booksArray) {
  if (!userId) return;
  const docRef = doc(db, 'user', userId);
  await setDoc(docRef, { books: booksArray }, { merge: true });
}

export async function loadsBooksFromCloud(userId) {
  if (!userId) return;
  const docRef = doc(db, 'user', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().books || [];
  }
  return [];
}
