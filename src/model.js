import mongoose from 'mongoose';

/*
** Schema:
** index | date | timestamp | task | detail
*/

// This will need to change if in a different timezone.
const now = new Date().toLocaleString('en-CA', { timeZone: 'America/New_York' });
const date = now.slice(0, 10);
const timestamp = now.slice(12);

const schema = mongoose.Schema({
  // index: {
  //   type: Number,
  //   required: true
  // },
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

const lineItem = mongoose.model('line-item', schema);

lineItem.get = (cb, limit) => {
  lineItem.find(cb).limit(limit);
};

export default lineItem;