const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), { dbName: "verifyDB" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Book Integration', () => {
  it('should save and find a book in the DB', async () => {
    const book = new Book({ title: "Test", author: "Dev", genre: "Fiction", publishedYear: 2020 });
    await book.save();

    const found = await Book.findOne({ title: "Test" });
    expect(found.author).toBe("Dev");
  });
});
