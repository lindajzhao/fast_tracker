import lineItem from '../model';

function createLine(req, res) {
  const item = new lineItem();
  const input = req.body;

  item.date = input.date || item.date;
  item.timestamp = input.timestamp || item.timestamp;
  item.task = input.task;
  item.detail = input.detail;

  item.save(err => {
    res.json({
      message: 'New line item created!',
      data: item
    });
  });
}

export default createLine;