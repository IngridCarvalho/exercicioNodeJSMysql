const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
    conn.query('SELECT * FROM movement', (err, data_movement) => {
     if (err) {
      res.json(err);
     }
     res.render('registrations/include-movement', {
        data: data_movement
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO movement set ?', data, (err, data_movement) => {
      console.log(data_movement);
      res.redirect('registrations/include-movement');
    })
  })
};

//missing adjusting the edit and update
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM movement WHERE id = ?", [id], (err, rows) => {
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

  conn.query('UPDATE movement set ? where id = ?', [newRegister, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM movement WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
