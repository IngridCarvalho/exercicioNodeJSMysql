const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM account', (err, data_account) => {
     if (err) {
      res.json(err);
     }
     res.render('registrations/include-account', {
        data: data_account,
        accountEdit: null
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO account set ?', data, (err, data_account) => {
      res.redirect('registrations/include-account');
    })
  })
};


//missing adjusting the edit and update
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM account WHERE id = ?", [id], (err, rows) => {
      res.render('registrations/include-account', {
        accountEdit: rows[0],
        data: null
      })
    });
  });
};

controller.update = (req, res) => {
  const newRegister = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE account set ? where id = ?', [newRegister, req.body.id], (err, rows) => {
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
