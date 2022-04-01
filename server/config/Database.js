import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'root', 'CODE', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;