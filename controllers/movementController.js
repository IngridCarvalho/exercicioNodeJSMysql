const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
    conn.query('SELECT m.id, m.description, m.type, m.value, a.name as account, c.name as category FROM movement m JOIN account a on a.id = m.id_account JOIN category c on c.id = m.id_category', (err, data_movement) => {
			conn.query('SELECT id, name FROM account', (err, data_account) => {
				conn.query('SELECT id, name FROM category', (err, data_category) => {
					if (err) {
						res.json(err);
					}
		     res.render('registrations/include-movement', {
		        movement: data_movement,
						account: data_account,
						category: data_category,
						movementEdit: null
     			});
				})
		 })
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(data)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO movement set ?', data, (err, data_movement) => {
			if (err) {
				res.json(err);
			}
      res.redirect('/');
    })
  })
};

//missing adjusting the edit and update
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT m.id, m.description, m.type, m.value, a.name as account, c.name as category FROM movement m JOIN account a on a.id = m.id_account JOIN category c on c.id = m.id_category where m.id =  ?", [id], (err, rows) => {
			conn.query('SELECT id, name FROM account', (err, data_account) => {
				conn.query('SELECT id, name FROM category', (err, data_category) => {
					res.render('registrations/include-movement', {
		        movementEdit: rows[0],
						category: data_category,
						account: data_account,
						movement: null
		      })
				})
			})
    });
  });
};

controller.update = (req, res) => {
  const newRegister = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE movement set ? where id = ?', [newRegister, req.body.id], (err, rows) => {
		if (err) {
			res.json(err);
		}
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
