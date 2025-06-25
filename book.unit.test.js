const Book = require('../models/Book');

describe('Book Model Unit Tests', () => {
  it('should create a book object', () => {
    const book = new Book({
      title: "Mock Book",
      author: "Test Author",
      genre: "Testing",
      publishedYear: 2024
    });

    expect(book.title).toBe("Mock Book");
    expect(book.publishedYear).toBe(2024);
  });
});
