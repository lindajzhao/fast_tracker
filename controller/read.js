import lineItem from '../model';

function readLine(req, res) {
  console.log('readline');
  // Just reads all lines for now.
  lineItem.get((err, items) => {
    if (err) {
      res.json({
        status: 'error',
        message: err
      });
    }

    res.json({
      status: 'success',
      message: 'table retrieved successfully',
      data: items
    });
  });
}

export default readLine;