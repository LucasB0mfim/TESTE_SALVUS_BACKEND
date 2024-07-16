const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'btsiyxwoqzulvargnpfv-mysql.services.clever-cloud.com',
    user: 'ukoxp25c9bjyi73u',
    password: 'QqPzFv1CUOPwmFkTxNDu',
    database: 'btsiyxwoqzulvargnpfv'
});

module.exports = pool;
