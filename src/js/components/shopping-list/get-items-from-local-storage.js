export async function getItemsFromLocalStorage(userName) {
  try {
    const stateStorage = localStorage.getItem(userName);
    if (!stateStorage) return [];
    const parseData = JSON.parse(stateStorage);
    if (
      !parseData ||
      !Array.isArray(parseData.booksList) ||
      parseData.booksList.length === 0
    )
      return [];

    const { booksList } = parseData;
    return booksList;
  } catch (error) {
    console.error('ListShoppingList:', error);
    throw new Error('Error localStorage or API');
  }
}
