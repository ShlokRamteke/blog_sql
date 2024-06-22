import mysql from "mysql2";

const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "root",
  database: "blog",
});

db.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});

export default db;
