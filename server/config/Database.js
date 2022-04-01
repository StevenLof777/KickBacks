// import Sequelize from 'sequelize';

// import dotenv  from "dotenv"
// dotenv.config()

// create connection to our db
// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });

// export default sequelize;

import { Sequelize } from "sequelize";
 
const db = new Sequelize('shoe_store_db', 'root', 'CODE', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
 