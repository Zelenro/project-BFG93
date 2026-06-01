export function stateModalBtnShopping(id, userName = 'Stefan') {
  try {
    const stateStorage = localStorage.getItem(userName);
    if (!stateStorage) return;
    const parseData = JSON.parse(stateStorage);
    const { booksList } = parseData;
    const result = booksList.find(el => el === id);
    return Boolean(result);
  } catch (error) {
    throw new Error('localStorage');
  }
}
