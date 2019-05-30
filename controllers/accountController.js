const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
    conn.query('SELECT * FROM account', (err, data_account) => {
     if (err) {
      res.json(err);
     }
     res.render('cadastros/include-account', {
        data: data_account
     });
    });
  });
};

module.exports = controller;