# 📚 Book Manager API

A simple RESTful API to manage books using Express and MongoDB.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB (via mongoose)
- Jest (for testing)
- Supertest
- MongoDB Memory Server

---

## 📦 API Endpoints

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | /api/books     | Get all books     |
| POST   | /api/books     | Add a new book    |
| PUT    | /api/books/:id | Update a book     |
| DELETE | /api/books/:id | Delete a book     |

📁 Folder Structure
book-manager-api/
│
├── models/
│   └── Book.js
├── tests/
│   ├── book.unit.test.js
│   ├── book.integration.test.js
│   └── book.api.test.js
├── index.js
├── package.json
└── README.md

---

## 🧪 How to Run Tests

```bash
npm install
npm test
