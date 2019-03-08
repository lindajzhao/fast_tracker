import mongoose from 'mongoose';
import now from './utils/now';

/*
** Schema:
** index | date | timestamp | task | detail
*/

const present = now();

const schema = mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: present.date,
  },
  time: {
    type: String,
    required: true,
    default: present.time,
  },
  task: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: false,
  }
});

const lineItem = mongoose.model('line-item', schema);

lineItem.get = (cb, limit) => {
  lineItem.find(cb).limit(limit);
};

export default lineItem;