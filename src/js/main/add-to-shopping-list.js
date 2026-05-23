import { toggleModalBtnAddToShopingList } from './toggle-modal-btn-add-to-shoping-list';

export function addToShoppimgList(id, userName = 'Stefan') {
  try {
    const stateStorage = localStorage.getItem(userName);

    if (!stateStorage) {
      const storageBooks = {
        user: userName,
        booksList: [id],
      };
      localStorage.setItem(userName, JSON.stringify(storageBooks));
      return true;
    }

    const parseData = JSON.parse(stateStorage);
    const { booksList } = parseData;
    const result = booksList.find(el => el === id);

    if (result) {
      const updateList = booksList.filter(el => el !== id);
      parseData.booksList = updateList;
      localStorage.setItem(userName, JSON.stringify(parseData));
      return false;
    }

    booksList.push(id);
    localStorage.setItem(userName, JSON.stringify(parseData));
    return true;
  } catch (error) {
    throw new Error('localStorage');
  }
}
