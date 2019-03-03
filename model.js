import mongoose from 'mongoose';

// index | date | timestamp | task | detail

const now = (new Date()).toISOString();
const date = now.slice(0, 10);
const timestamp = now.slice(10);

const schema = mongoose.Schema({
  index: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true,
    default: date
  },
  timestamp: {
    type: String,
    required: true,
    default: timestamp
  },
  task: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: false
  }
});

const LineItem = mongoose.model('line-item', schema);

export default LineItem;