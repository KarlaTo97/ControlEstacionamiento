import {createPool} from 'mysql2/promise';

const pool =createPool({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'epeña'
});

pool.getConnection().then(
    connection =>{
        pool.releaseConnection(connection);
        console.log('Conexión exitosa!');
    });
export default pool;