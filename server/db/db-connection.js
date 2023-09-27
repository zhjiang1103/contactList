const { Pool } = require('pg');
const db = new Pool({
  connectionString: process.env.DB_URI,
  ssl: (process.env.DATABASE_SSL != "false") 
  }
);
db.on('error', (err) => {
  console.error('Database error:', err);
});

module.exports = db;