import database from '../database.js';

class User {
  create(params) {
    return database.query(`
    INSERT INTO users (email)
    VALUES ('${params.email}')
  ;`);
  }

  find() {
    return database.query('SELECT * FROM users;');
  }

  findById(id) {
    return database.query(`SELECT * FROM users WHERE id = ${id};`);
  }

  findByIdAndUpdateEmail(id, newEmail) {
    return database.query(`UPDATE users
      SET email = '${newEmail}'
      WHERE id = ${id}
    `);
  }

  destroy(id) {
    return database.query(`DELETE FROM users WHERE id = ${id};`);
  }
}

export default new User();
