const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM account', (err, data_account) => {
     if (err) {
      res.json(err);
     }
     res.render('registrations/include-account', {
        data: data_account
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO account set ?', data, (err, data_account) => {
      console.log(data_account);
      res.redirect('registrations/include-account');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM account WHERE id = ?", [id], (err, rows) => {
      res.render('registrations/include-account', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newRegister = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE account set ? where id = ?', [newRegister, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM account WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
