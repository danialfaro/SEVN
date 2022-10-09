import { DataTypes } from "sequelize"
import db from '../db/sequelize.db'

const Medicion = db.define('Medicion', {
  sensor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: DataTypes.STRING,
}, {
  tableName: "mediciones"
});

export default Medicion;