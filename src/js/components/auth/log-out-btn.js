import { signOut } from 'firebase/auth';
import { auth } from '../../api/firebase-init';
import { headerJS } from '../header/header';
import { getRefs } from '../../helpers/get-refs';

export async function logOut() {
  const refs = getRefs();

  if (!logOut) return;
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error out:', error);
  }
}
