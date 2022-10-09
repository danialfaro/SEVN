import { DataTypes } from "sequelize"
import db from '../db/sequelize.db'

const Medicion = db.define('Medicion', {
  sensor: DataTypes.STRING,
  valor: DataTypes.STRING,
}, {
  tableName: "mediciones"
});

export default Medicion;