import { refactorShoppingList } from './refactor-shopping-list';

export async function handelShoppingList(e) {
  const btnDel = e.target.closest('.delete-btn');
  if (!btnDel) return;
  const bookId = btnDel.dataset.id;
  const storageUserName = btnDel.dataset.user;

  try {
    const stateStorage = localStorage.getItem(storageUserName);
    if (!stateStorage) return { books: [], storageUserName };
    const parseData = JSON.parse(stateStorage);
    const { user = 'Stefan', booksList = [] } = parseData;
    const newBooksList = booksList.filter(id => id !== bookId);
    const updateStorageData = {
      user: user || storageUserName,
      booksList: newBooksList,
    };
    localStorage.setItem(storageUserName, JSON.stringify(updateStorageData));
    await refactorShoppingList(storageUserName);
  } catch (error) {
    throw new Error('Error handelShoppingList');
  }
}
