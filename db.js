const mysql = require('mysql2/promise');

// MySQL connection
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'srv1391.hstgr.io',
    user: process.env.MYSQL_USER || 'u858543158_techguideDB',
    password: process.env.MYSQL_PASSWORD || 'WGH^ACq1@5vD',
    database: process.env.MYSQL_DATABASE || 'u858543158_files',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


// Test MySQL connection
pool.getConnection()
    .then(conn => {
        console.log('Connected to MySQL');
        conn.release();
    })
    .catch(err => {
        console.error('Error connecting to MySQL:', err);
    });

module.exports = pool;
