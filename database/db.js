// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// });

// connection.connect((error) => {
//     if(error)
//     {
//         console.log('Error de conexion: ' + error);
//         return;
//     }
//     console.log('Conectado a la base de datos');
// });

import sql from 'mssql';

    const dbSettings = {
        user: 'AlejoDB',
        password: 'alejo3898',
        server: 'localhost',
        database: 'Account_Cody',
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    };

    sql.connect(dbSettings, function (err){
        if (err) 
        {
            console.log("El erros es: " + err);
            return;
        }
        console.log("Conectado a la base de datos");
        const request = new sql.Request();           
        request.query('select * from Usuario', function (err, recordset) {
            if (err) 
                console.log(err)                
            console.log(recordset);            
        });
    });
