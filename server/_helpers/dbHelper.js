const sqlite = require('sqlite3').verbose();


const CREATE_BOOK_TABLE =
'CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY AUTOINCREMENT,book_isbn_number TEXT, book_name TEXT NOT NULL, book_author TEXT NOT NULL, category TEXT NOT NULL,language TEXT NOT NULL, quantity INTEGER NOT NULL)'
const CREATE_LENDING_TABLE =
'CREATE TABLE IF NOT EXISTS  lendings(id INTEGER PRIMARY KEY AUTOINCREMENT, book_name TEXT NOT NULL, firstname TEXT NOT NULL, lastname TEXT NOT NULL, email TEXT NOT NULL, returnDate TEXT NOT NULL )'

const CREATE_USER_TABLE = 'CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT NOT NULL, password TEXT NOT NULL)'

class DB_WRAPPER {
  constructor(db_file = './database/database.sqlite') {
      this.db = new sqlite.Database(db_file, (err) =>{
        if (err){
          console.log("COULD NOT CONNECT TO DATABASE");
        } 
      });
      this.db.exec('PRAGMA foreign_keys = ON');
      this.db.run(CREATE_BOOK_TABLE);
      this.db.run(CREATE_LENDING_TABLE);
      this.db.run(CREATE_USER_TABLE);
 }

cmd(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err !== null){
          console.log('Error running sql ' + sql);
          console.log(err);
          reject(err);
        }
        if (this !== undefined) resolve(this);
    });
  });
}

  getOne(sql, params = []) {
  return new Promise((resolve, reject) => {
    this.db.get(sql, params, (err, result) => {
      if (err) {
        console.log('Error running sql: ' + sql);
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

 getAll(sql, params = []) {
   return new Promise((resolve, reject) => {
     this.db.all(sql, params, (err, rows) => {
       if (err) {
         console.log('Error running sql: ' + sql)
         console.log(err)
         reject(err)
       } else {
         resolve(rows)
       }
     });
   });
 }
}
module.exports = DB_WRAPPER;
