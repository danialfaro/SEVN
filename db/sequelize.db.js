import dbConfig from "../db/config.db.js";
import Sequelize from "sequelize"

/*const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});*/

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

export default db;  