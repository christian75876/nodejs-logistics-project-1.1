import mysql from 'mysql2/promise';

try {
    const pool = mysql.createPool({
        host: 'logistics-project-ccpv.i.aivencloud.com',
        user: 'avnadmin',
        database: 'nodejs_logistics_project',
        port: 12085,
        password: 'AVNS_e6E5fGEKESLCCQT8IIe'        
    });
    const connection = await pool.getConnection();
    console.log('database connection established');

    connection.release();
} catch (err) {
    console.log(err);
}