const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
    conn.query('SELECT * FROM movement', (err, data_movement) => {
     if (err) {
      res.json(err);
     }
     res.render('cadastros/include-movement', {
        data: data_movement
     });
    });
  });
};

module.exports = controller;
