require('dotenv').config();
const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DB_URI
  //ssl: (process.env.DATABASE_SSL != "false") 
  }
);
console.log("process.env.DB_URI",process.env.DB_URI)
db.on('error', (err) => {
  console.error('Database error:', err);
});

module.exports = db;