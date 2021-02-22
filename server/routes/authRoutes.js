const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: process.env.MYSQL_user,
  password: process.env.MYSQL_pw,
  host: process.env.MYSQL_host,
  database: process.env.MYSQL_db,
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE user_name= ? AND password=?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log("err: " + err);
      } else if (result.length > 0) {
        const id = result[0].id;
        const token = jwt.sign({ id }, process.env.JWT_secret, {
          expiresIn: 3000,
        });
        console.log("result: " + result);
        res.json({ auth: true, token: token, result: result });
      } else if (result.length == 0) {
        console.log("user login attempt fail");
        res.json({ auth: false, message: "Login attempt fail" });
      }
    }
  );
});

module.exports = router;
