const mysql = require('mysql');


const Connect = async () => {
    try{
        const connection =   mysql.createPool({
            host:'localhost',
            user:'root',
            password: '',
            database: 'tareas',
        });
        console.log('Conectado a la base de datos');
        global.db = connection;
    }
    catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
}

module.exports = Connect