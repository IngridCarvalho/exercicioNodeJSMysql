const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
    conn.query('SELECT * FROM category', (err, data_category) => {
     if (err) {
      res.json(err);
     }
     res.render('registrations/include-category', {
        data: data_category
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO category set ?', data, (err, data_category) => {
      console.log(data_category);
      res.redirect('registrations/include-category');
    })
  })
};

//missing adjusting the edit and update
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM category WHERE id = ?", [id], (err, rows) => {
      res.render('/', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newRegister = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE category set ? where id = ?', [newRegister, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM category WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;