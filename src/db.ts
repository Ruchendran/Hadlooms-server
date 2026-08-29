import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
let db:any;
const dbConnection = (async()=>{
    try{
         db =await  mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'chathruknan',

            //aiven
            // host: process.env.HOST,
            // port: process.env.PORT,
            // user: process.env.User,
            // password: process.env.password,
            // database: process.env.database,
            // ssl: {
            //     rejectUnauthorized: false
            // }
        });
        const dbName = 'handlooms';
        const handLoomsDB =`CREATE DATABASE IF NOT EXISTS ${dbName}`;
        await db.query(handLoomsDB);
        await db.query(`USE ${dbName}`);
        console.log('Database created successfully');
    }
    catch(er){
        console.log('Error in creating database',er);
    }
});
const getDb=()=>{
    if(!db){
        throw new Error('Database connection not established');
    }
    return db;
}
export {dbConnection,getDb};