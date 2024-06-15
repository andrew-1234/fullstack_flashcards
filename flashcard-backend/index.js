const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(bodyParser.json());
app.use(cors());

let db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS flashcards (id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT, answer TEXT)', (err) => {
  if (err) {
    console.error(err.message);
  }
});

app.get('/api/flashcards', (req, res) => {
  const sql = 'SELECT * FROM flashcards';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
      return;
    }
    res.json(rows);
  });
})

app.post('/api/flashcards', (req, res) => {
  const { question, answer } = req.body;
  const sql = 'INSERT INTO flashcards (question, answer) VALUES (?,?)';
  db.run(sql, [question, answer], function(err) {
    if (err) {
      res.status(400).json({ message: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, question, answer });
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});

process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
    process.exit(0);
  });
});