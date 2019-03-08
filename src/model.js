import mongoose from 'mongoose';

/*
** Schema:
** index | date | timestamp | task | detail
*/

const nowRaw = new Date();
const now = {
  YYYY: nowRaw.getFullYear(),
  MM: nowRaw.getMonth() + 1,
  DD: nowRaw.getDate(),
  hh: nowRaw.getHours(),
  mm: nowRaw.getMinutes(),
  ss: nowRaw.getSeconds(),
};
const date = `${now.YYYY}-${now.MM}-${now.DD}`;
const time = `${now.hh}:${now.mm}:${now.ss}`;


const schema = mongoose.Schema({
  date: {
    type: String,
    required: true,
    default: date
  },
  time: {
    type: String,
    required: true,
    default: time
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