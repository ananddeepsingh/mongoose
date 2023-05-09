const mongoose = require('mongoose');

const IReview = [
  {
    name: String,
    body: String
  }
];

const bookStore = new mongoose.Schema({
  title: String,
  author: String,
  rating: {
    type: Number,
    min: 5,
    max: 9,
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`
    }
  },
  pages: Number,
  genres: Array,
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  reviews: IReview,
  writerEmail: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10
  }
});

module.exports = mongoose.model("book", bookStore);

bookStore.pre('save', (next) => {
  this.updatedAt = new Date();
  next();

  // throw new Error("Fail Save")
})
