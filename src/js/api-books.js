const BASE_URL = 'https://books-backend.p.goit.global/';

const endpoint = {
  category: 'books/category-list',
  topBooks: 'books/top-books',
  certainCategor: 'books/category',
  byId: id => `books/${id}`,
};

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const booksApiService = {
  async getCategori() {
    const response = await fetch(`${BASE_URL}${endpoint.category}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch Category');
    }
    return response.json();
  },
  async topBooks() {
    const response = await fetch(`${BASE_URL}${endpoint.topBooks}`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch Top books');
    }
    return response.json();
  },
  async certainCategory(category) {
    const queryParams = `category=${category}`;
    const response = await fetch(
      `${BASE_URL}${endpoint.certainCategory}?${queryParams}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch Certain category');
    }
    return response.json();
  },
  async byId(id) {
    const response = await fetch(`${BASE_URL}${endpoint.byId(id)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch By id');
    }
    return response.json();
  },
};
