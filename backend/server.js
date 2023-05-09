const mongoose = require('mongoose');
const Book = require('./modals/bookstore.js')

const URI = "mongodb+srv://ananddeepsingh:test1234@cluster0.mvleufo.mongodb.net/bookstore?retryWrites=true&w=majority";

const methodA = async () => {
  const book = new Book({
    title: "India",
    author: "India",
    rating: 4,
    pages: 400,
    genres: ["Entertainment"],
    reviews: [
      {
        name: "Apple1",
        body: "Fine1"
      }
    ]
  });

  return await book.save();

};

const methodB = async () => {
  const book = new Book({
    title: "Test",
    author: "Anand",
    rating: 9,
    pages: 200,
    genres: ["Entertainment"],
    reviews: [
      {
        name: "Apple",
        body: "Fine"
      }
    ]
  });

  await book.save();
  return book;
}

const methodC = async () => {
  try {
    const book = await Book.create({
      title: "zendy",
      author: "zendy",
      writerEmail: "INFO@gmail.com",
      rating: 6.3,
      pages: 300,
      genres: ["Suspense"],
      reviews: [
        {
          name: "AppleC",
          body: "FineC"
        }
      ]
    });

    return book;
  } catch (e) {
    return console.log(e.message)
  }
}

const addBook = async () => {

  // method 1
  // const book = await methodA();

  // method 2
  // const book = methodB()

  // method 3
  const book = await methodC();

  // book.title = "udta punjab"
  // book.save();

  console.log(book)
}

addBook()

// mongoose.connect(URI)
mongoose.connect(URI).then((con) => {
  console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
})
